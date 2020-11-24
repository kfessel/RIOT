/*
@licstart  The following is the entire license notice for the
JavaScript code in this file.

Copyright (C) 1997-2019 by Dimitri van Heesch

This program is free software; you can redistribute it and/or modify
it under the terms of version 2 of the GNU General Public License as published by
the Free Software Foundation

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

@licend  The above is the entire license notice
for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "My Project", "index.html", [
    [ "RIOT Documentation", "index.html", [
      [ "RIOT in a nutshell", "index.html#riot-in-a-nutshell", null ],
      [ "Contribute to RIOT", "index.html#contribute-to-riot", null ],
      [ "The quickest start", "index.html#the-quickest-start", null ],
      [ "Structure", "index.html#structure", [
        [ "core", "index.html#autotoc_md1597", null ],
        [ "boards", "index.html#autotoc_md1598", null ],
        [ "cpu", "index.html#autotoc_md1599", null ],
        [ "drivers", "index.html#autotoc_md1600", null ],
        [ "sys", "index.html#autotoc_md1601", null ],
        [ "sys/net", "index.html#autotoc_md1602", null ],
        [ "pkg", "index.html#autotoc_md1603", null ],
        [ "examples", "index.html#autotoc_md1604", null ],
        [ "tests", "index.html#autotoc_md1605", null ],
        [ "dist & doc", "index.html#autotoc_md1606", null ]
      ] ],
      [ "Further information", "index.html#further-information", null ]
    ] ],
    [ "Creating modules", "creating-modules.html", [
      [ "The general structure", "creating-modules.html#the-general-structure", null ],
      [ "Module dependencies", "creating-modules.html#autotoc_md1608", null ],
      [ "Modules outside of RIOTBASE", "creating-modules.html#modules-outside-of-riotbase", null ],
      [ "Pseudomodules", "creating-modules.html#pseudomodules", null ],
      [ "Helper tools", "creating-modules.html#autotoc_md1609", null ]
    ] ],
    [ "Creating an application", "creating-an-application.html", [
      [ "The main function", "creating-an-application.html#the-main-function", null ],
      [ "The application's Makefile", "creating-an-application.html#the-applications-makefile", [
        [ "The minimal Makefile", "creating-an-application.html#the-minimal-makefile", null ],
        [ "How to handle unsupported boards?", "creating-an-application.html#handle-unsupported-boards", null ],
        [ "Including modules", "creating-an-application.html#including-modules", null ]
      ] ],
      [ "Helper tools", "creating-an-application.html#autotoc_md1610", null ]
    ] ],
    [ "Porting boards", "porting-boards.html", [
      [ "General structure", "porting-boards.html#general-structure", [
        [ "Source files", "porting-boards.html#board-source-files", null ],
        [ "Makefiles", "porting-boards.html#autotoc_md1611", [
          [ "Pitfalls", "creating-modules.html#autotoc_md1607", null ],
          [ "Makefile", "porting-boards.html#Makefile", null ],
          [ "Makefile.dep", "porting-boards.html#makefile-dep", null ],
          [ "Makefile.features", "porting-boards.html#makefile-features", null ],
          [ "Makefile.include", "porting-boards.html#makefile-include", null ]
        ] ],
        [ "doc.txt", "porting-boards.html#board-doc", null ]
      ] ],
      [ "Helper tools", "porting-boards.html#autotoc_md1612", null ],
      [ "Using Common code", "porting-boards.html#common-board-code", null ],
      [ "Boards outside of RIOTBASE", "porting-boards.html#boards-outside-of-riotbase", null ],
      [ "Tools", "porting-boards.html#boards-tools", null ]
    ] ],
    [ "Writing a Device Driver in RIOT", "driver-guide.html", [
      [ "General Design Objectives", "driver-guide.html#driver-guide-design-objectives", null ],
      [ "General", "driver-guide.html#driver-guide-general", [
        [ "Documentation", "driver-guide.html#driver-guide-doc", null ],
        [ "Device descriptor and parameter configuration", "driver-guide.html#driver-guide-types", null ],
        [ "Default device configuration", "driver-guide.html#driver-guide-config", null ],
        [ "Compile-time configuration documentation", "driver-guide.html#driver-guide-doxygen", null ],
        [ "Initialization", "driver-guide.html#driver-guide-initialization", null ],
        [ "Return Values", "driver-guide.html#driver-guide-return-values", [
          [ "Documenting Return Values", "driver-guide.html#driver-guide-return-values-doc", null ]
        ] ],
        [ "General Device Driver Checklist", "driver-guide.html#driver-guide-general-checklist", null ],
        [ "Build system integration", "driver-guide.html#autotoc_md1613", [
          [ "Internal include files", "driver-guide.html#autotoc_md1614", null ],
          [ "External dependencies", "driver-guide.html#autotoc_md1615", null ]
        ] ],
        [ "Helper tools", "driver-guide.html#autotoc_md1616", null ]
      ] ],
      [ "Sensors", "driver-guide.html#driver-guide-sensors", [
        [ "SAUL", "driver-guide.html#driver-guide-saul", null ],
        [ "Initialization", "driver-guide.html#driver-guide-sensor-initialization", null ],
        [ "Value handling", "driver-guide.html#driver-guide-sensor-value-handling", [
          [ "Value semantics", "driver-guide.html#driver-guide-sensor-value-semantics", null ],
          [ "Typing", "driver-guide.html#driver-guide-sensor-types", null ]
        ] ],
        [ "Additional Sensor Driver Checklist", "driver-guide.html#driver-guide-sensor-checklist", null ]
      ] ],
      [ "Network devices", "driver-guide.html#driver-guide-netdev", [
        [ "Initialization", "driver-guide.html#driver-guide-netdev-init", null ],
        [ "netdev", "driver-guide.html#driver-guide-netdev-interface", null ],
        [ "Additional Network Device Driver Checklist", "driver-guide.html#driver-guide-netdev-checklist", null ]
      ] ],
      [ "TODO", "driver-guide.html#driver-guide-todo", null ]
    ] ],
    [ "Getting started", "getting-started.html", [
      [ "Downloading RIOT code", "getting-started.html#downloading-riot-code", null ],
      [ "Compiling RIOT", "getting-started.html#compiling-riot", [
        [ "Setting up a toolchain", "getting-started.html#setting-up-a-toolchain", null ],
        [ "The build system", "getting-started.html#the-build-system", null ],
        [ "Building and executing an example", "getting-started.html#building-and-executing-an-example", null ],
        [ "Configuring an application", "getting-started.html#configuring-an-application", null ]
      ] ],
      [ "Use Docker to build RIOT", "getting-started.html#docker", [
        [ "Setup", "getting-started.html#docker-setup", [
          [ "Installing docker", "getting-started.html#autotoc_md1617", null ]
        ] ]
      ] ],
      [ "Usage", "getting-started.html#autotoc_md1618", [
        [ "Troubleshooting", "getting-started.html#docker-troubleshooting", null ]
      ] ],
      [ "Using the native port with networking", "getting-started.html#autotoc_md1619", [
        [ "Setting up a tap network", "getting-started.html#autotoc_md1620", null ]
      ] ]
    ] ],
    [ "Running and creating tests", "running-and-creating-tests.html", [
      [ "Implementing automated tests", "running-and-creating-tests.html#autotoc_md1621", null ],
      [ "Running automated tests", "running-and-creating-tests.html#autotoc_md1622", null ],
      [ "Automated Tests Guidelines", "running-and-creating-tests.html#autotoc_md1623", null ],
      [ "Use expect() instead of assert()", "running-and-creating-tests.html#autotoc_md1624", null ],
      [ "Interaction through the uart", "running-and-creating-tests.html#autotoc_md1625", null ]
    ] ],
    [ "Build System Basics", "build-system-basics.html", [
      [ "BOARD, CPU & FEATURES", "build-system-basics.html#board-cpu-features", [
        [ "FEATURES", "build-system-basics.html#features", [
          [ "What is a FEATURE?", "build-system-basics.html#autotoc_md1626", null ],
          [ "Providing a FEATURE", "build-system-basics.html#autotoc_md1627", null ],
          [ "All the FEATURES_%", "build-system-basics.html#autotoc_md1628", null ],
          [ "Where to define FEATURES_%", "build-system-basics.html#autotoc_md1629", null ]
        ] ],
        [ "CPU/CPU_MODEL", "build-system-basics.html#cpu", null ],
        [ "BOARD", "build-system-basics.html#board", null ]
      ] ],
      [ "Variables declaration guidelines", "build-system-basics.html#variable-declaration-guidelines", [
        [ "Avoid unnecessary export", "build-system-basics.html#autotoc_md1630", null ],
        [ "Use memoized for variables referencing a function or command", "build-system-basics.html#autotoc_md1631", [
          [ "recursively expanded variable:", "build-system-basics.html#autotoc_md1632", null ],
          [ "simply expanded variable:", "build-system-basics.html#autotoc_md1633", null ],
          [ "memoized:", "build-system-basics.html#autotoc_md1634", null ]
        ] ],
        [ "Additional documentation", "build-system-basics.html#autotoc_md1635", null ]
      ] ]
    ] ],
    [ "Kconfig in RIOT", "kconfig-in-riot.html", [
      [ "Overview", "kconfig-in-riot.html#kconfig-overview", [
        [ "Exposure", "kconfig-in-riot.html#autotoc_md1636", null ],
        [ "Assignment", "kconfig-in-riot.html#autotoc_md1637", null ],
        [ "Verification and application", "kconfig-in-riot.html#autotoc_md1638", null ]
      ] ],
      [ "User's guide to configure with Kconfig", "kconfig-in-riot.html#kconfig-users-guide", [
        [ "Configure using menuconfig", "kconfig-in-riot.html#configure-using-menuconfig", null ],
        [ "Configure using '.config' files", "kconfig-in-riot.html#configure-using-files", null ],
        [ "Application configuration with Kconfig", "kconfig-in-riot.html#app-config-kconfig", null ],
        [ "A note on the usage of CFLAGS", "kconfig-in-riot.html#autotoc_md1640", null ]
      ] ],
      [ "Integration into the build system", "kconfig-in-riot.html#kconfig-integration-into-build-system", [
        [ "Steps during the build process", "kconfig-in-riot.html#kconfig-steps-build-process", [
          [ "0. Module dependency resolution", "kconfig-in-riot.html#autotoc_md1642", [
            [ "Input", "kconfig-in-riot.html#autotoc_md1643", null ],
            [ "Output", "kconfig-in-riot.html#autotoc_md1644", null ]
          ] ],
          [ "1. Module listing", "kconfig-in-riot.html#autotoc_md1645", [
            [ "Input", "kconfig-in-riot.html#autotoc_md1646", null ],
            [ "Output", "kconfig-in-riot.html#autotoc_md1647", null ]
          ] ],
          [ "2. Merging all configuration sources", "kconfig-in-riot.html#kconfig-steps-merge-configs", [
            [ "Input", "kconfig-in-riot.html#autotoc_md1648", null ],
            [ "Output", "kconfig-in-riot.html#autotoc_md1649", null ]
          ] ],
          [ "3. Menuconfig execution (optional)", "kconfig-in-riot.html#autotoc_md1650", [
            [ "Input", "kconfig-in-riot.html#autotoc_md1651", null ],
            [ "Output", "kconfig-in-riot.html#autotoc_md1652", null ]
          ] ],
          [ "4. Generation of the autoconf.h header", "kconfig-in-riot.html#kconfig-steps-header-gen", [
            [ "Input:", "kconfig-in-riot.html#autotoc_md1653", null ],
            [ "Output:", "kconfig-in-riot.html#autotoc_md1654", null ]
          ] ],
          [ "Summary of files", "kconfig-in-riot.html#autotoc_md1655", null ]
        ] ],
        [ "Kconfig symbols in Makefiles", "kconfig-in-riot.html#autotoc_md1656", null ]
      ] ],
      [ "Transition phase", "kconfig-in-riot.html#kconfig-transition-phase", [
        [ "Making configuration via Kconfig optional", "kconfig-in-riot.html#kconfig-configuration-optional", null ],
        [ "Modelling CPUs, boards and provided features", "kconfig-in-riot.html#kconfig-cpu-boards-features", [
          [ "Features", "kconfig-in-riot.html#autotoc_md1658", [
            [ "Example", "kconfig-in-riot.html#autotoc_md1659", null ]
          ] ],
          [ "CPUs", "kconfig-in-riot.html#autotoc_md1660", [
            [ "Example", "kconfig-in-riot.html#autotoc_md1661", null ]
          ] ],
          [ "Boards", "kconfig-in-riot.html#autotoc_md1662", [
            [ "Example", "kconfig-in-riot.html#autotoc_md1663", null ]
          ] ]
        ] ],
        [ "Summary of reserved Kconfig prefixes", "kconfig-in-riot.html#autotoc_md1664", null ]
      ] ],
      [ "Appendixes", "kconfig-in-riot.html#kconfig-appendixes", [
        [ "Appendix A: Check if a module or package is used", "kconfig-in-riot.html#kconfig-appendix-a", null ],
        [ "Appendix B: Difference between 'Kconfig' and '.config' files", "kconfig-in-riot.html#kconfig-appendix-b", null ],
        [ "Appendix C: Pitfall when using different configuration interfaces", "kconfig-in-riot.html#kconfig-appendix-c", null ],
        [ "Appendix D: A few key aspects while exposing a macro to Kconfig", "kconfig-in-riot.html#kconfig-appendix-d", null ]
      ] ],
      [ "Useful references", "kconfig-in-riot.html#kconfig-useful-references", null ]
    ] ],
    [ "Using C++ in RIOT", "using-cpp.html", [
      [ "Levels of Support", "using-cpp.html#levels-of-support", null ],
      [ "Using C++", "using-cpp.html#autotoc_md1668", null ],
      [ "RIOT Modules in C++", "using-cpp.html#cpp-in-riot", null ],
      [ "See Also", "using-cpp.html#see-also", null ]
    ] ],
    [ "Advanced build system tricks", "advanced-build-system-tricks.html", [
      [ "Introduction", "advanced-build-system-tricks.html#introduction", null ],
      [ "Customize the build system", "advanced-build-system-tricks.html#customize-build-system", [
        [ "Usage", "advanced-build-system-tricks.html#autotoc_md1669", null ]
      ] ],
      [ "Handling multiple boards with udev-rules", "advanced-build-system-tricks.html#multiple-boards-udev", [
        [ "Handling multiple versions of the same BOARD", "advanced-build-system-tricks.html#autotoc_md1670", null ],
        [ "Notes", "advanced-build-system-tricks.html#autotoc_md1671", null ],
        [ "Documentation:", "advanced-build-system-tricks.html#autotoc_md1672", null ]
      ] ],
      [ "# Handling multiple boards without udev-rules", "advanced-build-system-tricks.html#autotoc_md1673", null ],
      [ "Analyze dependency resolution", "advanced-build-system-tricks.html#analyze-depedency-resolution", null ]
    ] ],
    [ "Changelog", "changelog.html", [
      [ "Release 2020.10", "changelog.html#release-2020-10", null ],
      [ "Release 2020.07", "changelog.html#release-2020-07", null ],
      [ "Release 2020.04", "changelog.html#release-2020-04", null ],
      [ "Release 2020.01", "changelog.html#release-2020-01", null ],
      [ "Release 2019.10", "changelog.html#release-2019-10", null ],
      [ "Release 2019.07", "changelog.html#release-2019-07", null ],
      [ "Release 2019.04", "changelog.html#release-2019-04", null ],
      [ "Release 2019.01", "changelog.html#release-2019-01", null ],
      [ "Release 2018.10", "changelog.html#release-2018-10", null ],
      [ "Release 2018.07", "changelog.html#release-2018-07", null ],
      [ "Release 2018.04", "changelog.html#release-2018-04", null ],
      [ "Release 2018.01", "changelog.html#release-2018-01", null ],
      [ "Release 2017.10", "changelog.html#release-2017-10", null ],
      [ "Release 2017.07", "changelog.html#release-2017-07", null ],
      [ "Release 2017.04", "changelog.html#release-2017-04", null ],
      [ "Release 2017.01", "changelog.html#release-2017-01", null ],
      [ "Release 2016.10", "changelog.html#release-2016-10", null ],
      [ "Release 2016.07", "changelog.html#release-2016-07", null ],
      [ "Release 2016.04", "changelog.html#release-2016-04", null ],
      [ "Release 2015.12", "changelog.html#release-2015-12", null ],
      [ "Release 2015.09", "changelog.html#release-2015-09", null ],
      [ "Release 2014.12", "changelog.html#release-2014-12", null ],
      [ "Release 2014.05", "changelog.html#release-2014-05", null ],
      [ "Release 2014.01", "changelog.html#release-2014-01", null ],
      [ "Release 2013.08", "changelog.html#release-2013-08", null ]
    ] ],
    [ "Removed Features and Modules", "md_LOSTANDFOUND.html", [
      [ "How to read this list", "md_LOSTANDFOUND.html#autotoc_md1675", null ],
      [ "Removed Features", "md_LOSTANDFOUND.html#autotoc_md1676", null ]
    ] ],
    [ "Todo List", "todo.html", null ],
    [ "Deprecated List", "deprecated.html", null ],
    [ "Modules", "modules.html", "modules" ],
    [ "Data Structures", "annotated.html", [
      [ "Data Structures", "annotated.html", "annotated_dup" ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Data Fields", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", null ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Related Functions", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "Globals", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", "globals_vars" ],
        [ "Typedefs", "globals_type.html", "globals_type" ],
        [ "Enumerations", "globals_enum.html", "globals_enum" ],
        [ "Enumerator", "globals_eval.html", "globals_eval" ],
        [ "Macros", "globals_defs.html", "globals_defs" ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
".html",
"adc__ctrl_8h.html#a7859c0a3efa8b1c360f5c2376baf051eab525d2f33777066edec6e51d2a8352a3",
"aip31068__regs_8h.html#afe2c391a48f18cb0a1d3e42cecc848fa",
"async__read_8h_source.html",
"at86rf215__registers_8h.html#afecf2e84e026725b60280ca46fb4a923",
"at86rf2xx__registers_8h.html#af4bdbd7f7ae34702e4593319c97ab2ac",
"atmega328p_2include_2board_8h.html#af68fde6b7d5b362834e6a8d382c6c0d7",
"b-l475e-iot01a_2include_2board_8h.html#a6e6991e361f63a8d8aa3ae117be9f33e",
"bmx280__internals_8h.html#a3cb4d02fcf0aa42f9bc0091f2abc6876",
"boards_2cc2538dk_2include_2periph__conf_8h.html#a160c7b1c3bc13c7cb5ac4ed375f4e21d",
"boards_2e180-zg120b-tb_2include_2periph__conf_8h.html#a6ef9462ca952cd51c30a36ebf7769338",
"boards_2fox_2include_2periph__conf_8h.html#a055813e339f41a120f81a18fe83a07c3",
"boards_2limifrog-v1_2include_2periph__conf_8h.html#a713e03d19734d793baee3d1cc25c2dbb",
"boards_2mulle_2include_2periph__conf_8h.html#ae22f757c8b5948de5c58c3dbeea51137",
"boards_2nucleo-f303k8_2include_2periph__conf_8h.html#ae7ffc4f0306b1c3ea1d0e9f985a2ab16",
"boards_2nucleo-f746zg_2include_2periph__conf_8h.html#a713e03d19734d793baee3d1cc25c2dbb",
"boards_2nucleo-l4r5zi_2include_2periph__conf_8h_source.html",
"boards_2pyboard_2include_2periph__conf_8h.html#a055813e339f41a120f81a18fe83a07c3",
"boards_2samr34-xpro_2include_2periph__conf_8h_source.html",
"boards_2sodaq-sara-aff_2include_2periph__conf_8h.html#a22877cb675e55db16cb1227b62dc9404",
"boards_2stm32f769i-disco_2include_2periph__conf_8h.html#a713e03d19734d793baee3d1cc25c2dbb",
"byteorder_8h.html#ac35f5bbf9fa42e3e2a21e379af41bc5a",
"cc1312-launchpad_2include_2board_8h.html#a904884feea8e03c30c9a85ca6d7a8e5c",
"cc2538_2include_2periph__cpu_8h.html#afec7c948b8c70db3c9394fc3dc145a99",
"cc2538_8h.html#a5fcf66012513ff99c037c20d734e42f1",
"cc2538_8h.html#a921ce2bd9e0ae3e16c1f7dc6fc2ccc9d",
"cc2538_8h.html#af2c90421481f16bc4cb471e30cc5fc81",
"cc2650-launchpad_2include_2board_8h_source.html",
"cc26xx__cc13xx_8h.html#a666eb0caeb12ec0e281415592ae89083a1a4170338bf8c34c777f8f3804cb612c",
"cc26xx__cc13xx__gpt_8h.html#a83033c03edb8c1a2dc7cb065754927df",
"ccm_8h.html",
"changelog.html#release-2013-08",
"clist_8h.html#a1f79f458584bda97371873f9cc86696b",
"common_2nrf52xxxdk_2include_2gpio__params_8h_source.html",
"context__frame_8h.html#aab0e3cb9d051508d6b7df9330251614b",
"creating-an-application.html",
"dir_057bddb3db4977eddb35d49deb560f3e.html",
"dir_42c774247a11d748ddc7d26afc31da73.html",
"dir_8558003625bd272a605e6831ca3c3dcb.html",
"dir_c530a792f687840846bdba43781c09c1.html",
"div_8h.html#aa582d82bfc335a1472e82066337fdbab",
"ds1307_8h.html",
"dynamixel__reader_8h.html#a93a9ee3dc6f6e46e629ac312d780c34d",
"enc28j60__regs_8h.html#a49e9f52d358d425764512b1406eedae9",
"encx24j600__defines_8h.html#ad2f4b2a660e86a6546c1f92a2ec8ba15",
"esp32-wroom-32_2include_2arduino__pinmap_8h.html#a1bd18a419e095cdfe447689fdcd196be",
"esp8266-esp-12x_2include_2arduino__board_8h.html#aa898b6e59ed7793e1b7faa43384fe4c5",
"f2f4f7_2cfg__clock__values_8h.html#a7c07f079a96c4bf2c1c0727cc73a8efd",
"firefly_2include_2board_8h.html#a906ffb63a9555614b624eabd9353f569",
"functions_y.html",
"globals_eval_o.html",
"gnrc__tcp__common_8h.html#a233d8a6ddedc8b63d517b1a8e3fa9f48",
"group__ble__defs.html#ga05ea16f6c062b1760c675bfbb32d2f34",
"group__ble__defs.html#ga91747ba3a8c4a6103500b35a8e0d17d5",
"group__ble__skald__ibeacon.html#gac976de1aa4be4d5eb395d43e6bd90dda",
"group__boards__firefly.html",
"group__boards__samr34-xpro.html#gabeea4c0af9ef3837fa787d067dedbd26",
"group__core__sched.html#ggac528c02d3cccfb103d539b26ccdba6b2a03df569fdf879aa1107a13c32aaae310",
"group__cpu__atmega__common.html#ga251e9b536ed96ccb16aa28ca2d5bd656",
"group__cpu__cc2538__gpio.html#gga81616fb2c35cba2e374ca3b37e3f2663a5f893d82d87b115106ddaa82597352d8",
"group__cpu__cc2538__rfcore.html#ggaaf8fd5f0e57d456151c951e0f3715fc4a5435b1cff70cd37cbb8d1aaf1d50ab21",
"group__cpu__cc26xx__cc13xx__definitions.html#gaf1d5a9b375d10c260bf2e7b85bcbfe0b",
"group__cpu__msp430__common.html#gaaf3f5e6eaee07212584e981942f95268",
"group__drivers__SPS30__config.html",
"group__drivers__adcxx1c__config.html#ga280bd9c0ce53bdffe6ac702a2cb49fdc",
"group__drivers__adxl345.html#ggafeaa6456e370d2eb59f5e139d9f8b00cae3c8093e169c38c2a412e2e43af297be",
"group__drivers__at24cxxx.html",
"group__drivers__at86rf215__config.html#ga3fe67d134b271950f33d629abf32e6f2",
"group__drivers__ata8520e.html#ga15cf41cbb94ca225fafe68b0c24d680f",
"group__drivers__bmx055.html#gga13216a6a0deff8e2be640c8af9489ad4a490a0a514849fc9ef1c0294fc8158e50",
"group__drivers__cc110x.html#gga1928e3385efe9717d9b4d256d4ee5ac9a2cc97df700d5dc61ed96934bad962bb1",
"group__drivers__diskio.html#gaec3bb4dfe075d0ba2f3b07b300a95500",
"group__drivers__edbg__eui.html",
"group__drivers__hdc1000.html#ga6865897d06ef2557467d5ac59844c54f",
"group__drivers__ieee802154__hal.html#gabab1d0397934422e1baa86e84bae3a9b",
"group__drivers__ina3221.html#ga64c2cbd44cb57c2e14a1c25c65d7fbe4",
"group__drivers__ina3221.html#ggabb73f511d6e0f96788ade531d27783b8a4811f2dc226094ec0e19766fb12b5657",
"group__drivers__itg320x.html#gga2c1a5dae8a6b7d005e16912ea7519003ad9e339580afefa9aa419c806ef65ed04",
"group__drivers__lc709203f.html#ga696968e0535c57e59640c55f381a0258",
"group__drivers__lis2dh12.html#gga9d62e2a4d6edc3a479d15fdf213decd0afea0441318139acab4095aee6d5e356c",
"group__drivers__lis3dh.html#ga86e07de702e231636d2b5cbcb108e2b8",
"group__drivers__lis3mdl.html#ggadf9568a25c1594bfa79e2c70a7a79645ac88e542e87edaf2c0d18bb96ad33fb54",
"group__drivers__lsm6dsl.html#ggadab0c4467b3c6f365e87d0316a74bf64a7c3fa2accf7fa3d2466bc341fcd4f109",
"group__drivers__mii.html#ga76db0bb04997550a08d1a49f9e6e2f03",
"group__drivers__motor.html#ggafdaef3d663aec44673ff543b0c1d44e3a52172cdac32f6711640e1136d70c4e67",
"group__drivers__mrf24j40.html#gacdcc19e5d39a63ec79a8c469b0dbc98a",
"group__drivers__netdev__ieee802154.html#gaddfee45b3aadecc4d06fc6dfbbfcad2f",
"group__drivers__nrf5x__nrfmin.html#gaf7c2251e1d6b0bcbdafed0f3c2918b63",
"group__drivers__periph__adc.html#ga569737617c998468eb63b5af8191c33e",
"group__drivers__periph__pwm.html#ga011d8bb27b3edab7aaee614bbd3acd57",
"group__drivers__periph__timer.html#gac66133744b2b503740e6324e2efa644e",
"group__drivers__ph__oem.html#ggac06302df40bc05bc56dec2ed7f7052b6a6dba40774bf039df66d669c022ed9905",
"group__drivers__rn2xx3.html#ga167adece764ab7ace53e08953a33192b",
"group__drivers__saul.html#ggabb911bb32d4e97b5fcd682dd43789991a09e7cee7241c5b698ec33d7bb95e76f8",
"group__drivers__sht2x.html#ga017e4f4214b458cb0f795f018157ade0",
"group__drivers__soft__uart.html#gaf51871ffadc3eade0c9a6e6cf69f780d",
"group__drivers__sx127x.html#ga4d152119c0f3adf16d58afbcb9707b41",
"group__drivers__tmp00x.html#gae2f69b4a2729f2b4494ae65d9a8fa6ca",
"group__drivers__w5100.html#gab5bc774566b48251447673b5c944da24",
"group__lwm2m__objects__device.html#gga128286c57e81fc250ee34376b4e9269aa9b79f8cc28d2018e4a737e27bb27505c",
"group__net__coap.html#ga487bb05f6e0b36c91c63dc55d7b389b1",
"group__net__csma__sender__conf.html#ga217da0a93c7ac72c14c63a9222198c32",
"group__net__eui__provider.html#ga2e34c3fce7629a05e5d8c15d3687c1ee",
"group__net__gnrc__gomach__conf.html#gafb601d63ff933b815d8c55bf859d569a",
"group__net__gnrc__ipv6__nib__conf.html#gaeb7fdd8c2655c48300788902de9dd17d",
"group__net__gnrc__ndp.html#ga289bcf8af6ed687541e6a1dfb566ed1c",
"group__net__gnrc__nettype.html#ga2d2c19e8f4647c18815104fc3e70584f",
"group__net__gnrc__rpl.html#gacb4fc7253fffcc094412d6b7891389a9",
"group__net__gnrc__sock.html#gac9d559e1e804acc82d3c6fc2445b52ad",
"group__net__ieee802154.html#gab821f90a4b625e3b0119c19b6f9a75fd",
"group__net__ipv6__addr.html#gafd117fe220ad063b68b3883bacf4e23e",
"group__net__loramac.html#gac2e74b5e399df6182d887dae5a403f0b",
"group__net__mqttsn.html#gga85f0f418e1a739554f3f904a501179dcaaa23140f0d492c41ef9fd95f3f1e1c48",
"group__net__ndp.html#ga200f7667726dd81a938eaeea19f1e6c1",
"group__net__netopt.html#gga19e30424c1ab107c9c84dc0cb29d9906a8e2ba1ca0480826ca5da1406ff5ac0ea",
"group__net__protnum.html#ga45d645b2e6109add740f81471c19e562",
"group__net__sixlowpan.html#gaa246644b69f97072ecc033537f0a7cdc",
"group__net__sock__dtls.html#ga23217dd17b42a1f85cf28f7fd73470b8",
"group__pkg__jsmn.html",
"group__pkg__nimble__netif.html#ggac12627b43234a2c5005eca7a2a0a88cda442f3aeabf61d2d88d28c707749229cb",
"group__pkg__openthread__cli.html#ga963c57aa6bb15734ab10566bee94dc6c",
"group__posix__sockets.html#gaa534f0825dfc858669d2c978dc26c13d",
"group__sys__auto__init__gnrc__netif.html",
"group__sys__checksum__fletcher16.html#ga011191e63f23ad149885dfcb9ef68dcc",
"group__sys__fmt.html#ga0918f0183dc9677de991a3b3b6289ac0",
"group__sys__iolist.html#gaa17f91ef26edec149cd806d8457aa3a0",
"group__sys__ptrtag.html#ga31600722dd3fa9490e2b8fbf9ce21de6",
"group__sys__suit__transport__coap.html#ga2a224e245f21691b6e8f0afbe9ca6eff",
"group__sys__ut.html#ga8c5c97079c5b259e4c0ff7c563b0f8ed",
"group__sys__xtimer.html#ga8b747b85d4d5f2e1be910cdbc72a01de",
"group__usb__cdc.html#ga6ba316b27b479ebdbfe7bf2269a68638",
"group__usb__usbus.html#ga396ffcaf8fe927535e8aac027c22a49d",
"hd44780__internal_8h.html#a0b34e184cf86f72b1efba96646ebeaa8",
"icmpv6_8h_source.html",
"inet__csum_8h_source.html",
"jc42__params_8h.html#aace53cb0136d0d57a2e65f0c4b7e1e90",
"kw2xrf__reg_8h.html#a4a3fe4929e2b3df9b4419808c9951d2f",
"kw2xrf__reg_8h.html#ab8c3058cfd9583d525755ace678716d6a887eb2a9fb2fe0fae283e4f8131f6547",
"kw41zrf__intern_8h.html#ad1af79a4a062a4dd02c4dcce5ebfb879",
"littlefs__fs_8h.html",
"lsm303dlhc__params_8h.html#a44e09524e55fbc56fff775f692ca6e3a",
"lwm2m__client__objects_8h_source.html",
"mcp2515__defines_8h.html",
"mcp2515__defines_8h.html#ae90ed8b2b88678b6333206c86581c6de",
"mips__pic32__common_2include_2periph__cpu__common_8h.html#ae29846b3ecd19a0b7c44ff80a37ae7c1",
"mp1_2cfg__clock__values_8h.html#a7bd5323a8c80411a6dcfed5339252cdb",
"mrf24j40__internal_8h.html#ac8ce53fc6cb2a226619ee242081330c0",
"mrf24j40__registers_8h.html#ae906f24cd6b5636ffdd0b07cbac8dcc4",
"msp430__regs_8h.html#aaa0d3e6a102c69ac36d1a145d01024c6",
"net_2gnrc_2ipv6_2hdr_8h_source.html",
"nrf51dk_2include_2board_8h.html#a614337fc407f6d0c9d86efa4e1272ac7",
"nrf5x__common_2include_2periph__cpu__common_8h.html#a5265674ed64e5865196727196ef8265b",
"openmote-cc2538_2include_2board_8h.html#a343fd2d3ce61b84f88ddfaea32c67c58",
"p2p__dodag_8h.html#aac3f11598e44737243c50e64d9270522",
"ph__oem__regs_8h.html#ae7fbcf4a00512be94584cbcb17ceb534ad5d8773f6f5b19db61991283d7b33302",
"ps_8h_source.html",
"reel_2include_2board_8h.html#a4cb3ff938bcabb01494ce529ae55a542",
"rtt__arch_8h_source.html",
"samd5x_2include_2periph__cpu_8h.html#a4ae6fb73122b20f3f54cbf69e5974d7d",
"sdcard__spi__internal_8h.html#a92fb3bf07625959294ecbab569146c68",
"semtech__loramac_8h.html#ae9e45827b7ac19b225b76b498c13a1f3",
"shtc1__params_8h_source.html",
"slstk3401a_2include_2board_8h.html#ac4bafa01fb75e4ebc81bf352d05af75c",
"slwstk6220a_2include_2board_8h.html#aa33c970f051ff2f38a217f39f00599c1",
"sodaq-sara-sff_2include_2board_8h.html#abfabde35a3e8b7ab50146a5e223bfead",
"stm32_2include_2cpu__conf_8h.html#a72c89204ecbd5efc8d52d3bd73003a28",
"stm32f3discovery_2include_2gpio__params_8h.html#a5442106fb6a31a0cc477a93d79701765",
"stmpe811__constants_8h.html#aa0eda5b3fedbe0d252bbeff243622420",
"structadcxx1c.html#a3e969e353d9e256a27d4e369cd6193ce",
"structapa102__params__t.html",
"structat86rf215__RF__regs.html#a70c68462e5275fecc9390caec4fb045f",
"structaux__smph__regs__t.html#ac8ecd43e5aec63c5ab389dc02a236f5c",
"structbmx280__calibration__t.html#abd62f1b20f152934ce9a01678fd7c993",
"structcc110x__params__t.html#a7f53dadb25ed1fa96081526c269fd749",
"structcc2538__sys__ctrl__t.html#a1254847239563116add2351dd05c33e1",
"structclk__cfg__t.html#a0f5e5530f2e8f9858db7ca7be838cfb4",
"structdcf77__bits__t_1_1values.html#a87d707dd80f766fdbf0f52f6257ad90f",
"structdynamixel__t.html#ab8bf4370cc019a4ff70acbd6685c56e5",
"structfcfg__regs__t.html#a9c076b68fed51f258669c9c0c3311bfa",
"structfxos8700__measurement__t.html#a437fbc98b29ac5b61503166a87fd8ed2",
"structgnrc__netif__hdr__t.html#abbf718ba7223770b72eb8fbd39dd85f6",
"structgnrc__sixlowpan__frag__rb__t.html",
"structi2c__conf__t.html#aa4e559f730ad39dda4716452eda87fae",
"structisl29020__t.html#aa50f65b5d403cba9b820268cbd298255",
"structlis3mdl__3d__data__t.html",
"structmag3110__data__t.html#a61518c49eb3d89077794f8054165a99a",
"structmsp__port__t.html",
"structnetdev__ieee802154__t.html#a203eea596910c7f3f446a63f3d02127f",
"structpca9685__saul__pwm__params__t.html#ac34160b461a0f28421cdaf50437deb95",
"structpwm__conf__chan__t.html#a4adfe9082dcdee88baf6c534630b24fb",
"structsaul__driver__t.html#a61cc7eac43a095d01db90d23286217ab",
"structsixlowpan__nd__opt__6ctx__t.html#a22443a474835f2e57725301890547258",
"structspi__conf__t.html#a7042cf7c0d3cde2ca5edb6eb1bbd6ec2",
"structtc32__conf__t.html#a8298b97c4ef3f9caed08f1d0a460c312",
"structuart__half__duplex__t.html#aa94a56024536192e7c2732cb0293eeba",
"structusbus__cdcecm__device.html#a9729439aa76167eb04f301c2789a9a98",
"structztimer__clock.html#a2aa372786c2d7b4e545cb807cccef2b1",
"sx127x__registers_8h.html#a2a92079c296408ae567934a139d1e970",
"sx127x__registers_8h.html#a677bb0a1739f63016524d363328c96c0",
"sx127x__registers_8h.html#aa0365c44a4c6958d0db1ee30705d84c9",
"sx127x__registers_8h.html#addc066bbe56e8553426542114e80741e",
"sys_2include_2net_2gnrc_2lwmac_2types_8h.html",
"tcs37727-internal_8h.html#a1f278b17e75a36ef890bd09ad2562787",
"tsl2561__internals_8h.html#a844453b00712e75370fe022318f133c7",
"usb-kw41z_2include_2board_8h.html#aebc6389533d9fc8dcbe4d2129a4d5a45",
"vectors__kinetis_8h.html#a726f29e0024ac52d8bf8826a06a7524a",
"waspmote-pro_2include_2arduino__pinmap_8h.html#aed62f69422d041e0c5bf05c91951c4c7",
"zptr_8h.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';