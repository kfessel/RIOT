/*
 * Copyright (C) 2019 Intel Corporation.  All rights reserved.
 * Copyright (C) 2020 TU Bergakademie Freiberg Karl Fessel
 * SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
 */

//
#include <stdlib.h>
#include <stdio.h>
#include <stdint.h>

#include <string.h>

#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wstrict-prototypes"
#include "wasm_export.h"
#pragma GCC diagnostic pop

#include "blob/hello.wasm.h"

#define DEFAULT_THREAD_STACKSIZE (6 * 1024)
#define DEFAULT_THREAD_PRIORITY 50

#define ERROR_BUFSIZ    (128)
#define WAMR_POOL_SIZE  (10 * 1024)
#define WAMR_HEAP_SIZE  (2 * 1024)
#define WAMR_STACK_SIZE (1 * 1024)

static char wasm_heap[WAMR_POOL_SIZE] = { 0 };

int main(void)
{
    char error_buf[ERROR_BUFSIZ];
    RuntimeInitArgs init_args = { 0 };

    /*
       init_args.mem_alloc_type = Alloc_With_Pool;
       init_args.mem_alloc_option.pool.heap_buf = wasm_heap;
       init_args.mem_alloc_option.pool.heap_size = WAMR_POOL_SIZE;
     */

    init_args.mem_alloc_type = Alloc_With_Allocator;
    init_args.mem_alloc_option.allocator.malloc_func = malloc;
    init_args.mem_alloc_option.allocator.realloc_func = realloc;
    init_args.mem_alloc_option.allocator.free_func = free;

    /* initialize runtime environment */
    if (!wasm_runtime_full_init(&init_args)) {
        puts("wasm_runtime_full_init() failed");
        return 1;
    }

    /* the bytecode might change, so allocate a copy */
    uint8_t *wasm_buf = malloc(hello_wasm_len);

    if (!wasm_buf) {
        puts("out of memory");
        goto fail1;
    }
    memcpy(wasm_buf, hello_wasm, hello_wasm_len);

    /* load runtime */
    wasm_module_t wasm_module = NULL;

    if (!(wasm_module = wasm_runtime_load(wasm_buf, hello_wasm_len,
                                          error_buf, ERROR_BUFSIZ))) {
        puts("wasm_runtime_load() failed");
        puts(error_buf);
        goto fail2;
    }

    /* instantiate module */
    wasm_module_inst_t wasm_module_inst = NULL;

    if (!(wasm_module_inst = wasm_runtime_instantiate(wasm_module,
                                                      WAMR_STACK_SIZE,
                                                      WAMR_HEAP_SIZE,
                                                      error_buf,
                                                      ERROR_BUFSIZ))
        ) {
        puts("wasm_runtime_instantiate() failed");
        puts(error_buf);
        goto fail3;
    }

    /* put the arguments together */
    int app_argc = 1;
    char *app_argv1 = "test";
    char **app_argv = { &app_argv1 };

    puts("wamr instance initialized, starting its execution");

    /* start execution of the instance */
    const char *exception = 0;
    int ret = 0;

    wasm_application_execute_main(wasm_module_inst, app_argc, app_argv);
    if (exception = wasm_runtime_get_exception(wasm_module_inst)) {
        puts("wasm_application_execute_main() failed with exception");
        puts(exception);
        goto fail4;
    }

    puts("wamr instance has terminated successfully");
    if (app_argc > 0) {
        ret = *((int *)app_argv);
        printf("return value %d\n", ret);
    }

fail4:
    wasm_runtime_deinstantiate(wasm_module_inst);

fail3:
    wasm_runtime_unload(wasm_module);

fail2:
    free(wasm_buf);

fail1:
    wasm_runtime_destroy();

    return 0;
}
