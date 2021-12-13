/* a native printf is provided by the builtin libc of wamr */

#ifdef __cplusplus
extern "C" int printf( const char * ,...);
#define WASM_EXPORT __attribute__((visibility("default"))) extern "C"
#else
extern int printf( const char * ,...);
#define WASM_EXPORT __attribute__((visibility("default")))
#endif

WASM_EXPORT int main(int argc, char **argv)
{
    printf("\tThis is the hello.wasm example\n");
    printf("\tcalled with runtime parameters: ");
    for(int i=0; i<argc; i++) {
        printf("%s ", argv[i]);
    }
    printf("\n");
    printf("\tBye!\n");
    return 2468;
}
