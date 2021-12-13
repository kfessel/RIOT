# WASM Micro Runtime in RIOT

This is a minimal example showing the application of the 
[WebAssembly Micro Runtime (WAMR)](https://github.com/bytecodealliance/wasm-micro-runtime)
in RIOT.

The main application demonstrates how to instantiate a WAMR module that 
executes a program given in WebAssembly byte code.

Some example C-code to compile to WebAssembly is
provided in the subfolder `wasm_sample`.
It can be compiled with Clang/`wasm-ld` with the given `Makefile`.

## Usage

First, build the `hello.wasm` file that contains the wasm byte code to execute.

    make hello.wasm

Then build the RIOT application

    make BOARD=native

and execute.
