var group__sys__vfs =
[
    [ "vfs.h", "vfs_8h.html", null ],
    [ "vfs_file_system_t", "structvfs__file__system__t.html", [
      [ "d_op", "structvfs__file__system__t.html#a9b4e4674da7cfcb3bdd4a34b9c9240b0", null ],
      [ "f_op", "structvfs__file__system__t.html#acdec44c0db7afa52f268c12a969f7796", null ],
      [ "fs_op", "structvfs__file__system__t.html#a47b001a12f6ded5db3c015366731a6aa", null ]
    ] ],
    [ "vfs_mount_struct", "structvfs__mount__struct.html", [
      [ "fs", "structvfs__mount__struct.html#a1eeb4910cd5d48e3f24d01522bd7ac66", null ],
      [ "list_entry", "structvfs__mount__struct.html#a71d31bb7d5782c3a634aaa41071669cf", null ],
      [ "mount_point", "structvfs__mount__struct.html#ad7b83b7aefe5125bea95a858e413cc68", null ],
      [ "mount_point_len", "structvfs__mount__struct.html#a986702d2b51212768494e23e71fc3c05", null ],
      [ "open_files", "structvfs__mount__struct.html#a2a23b0721dad76d3d3d519b6c06049de", null ],
      [ "private_data", "structvfs__mount__struct.html#ab8893e57ec78c401a9db109a0196783a", null ]
    ] ],
    [ "vfs_file_t", "structvfs__file__t.html", [
      [ "buffer", "structvfs__file__t.html#ae4fef566e126da40a50d80d01538cf12", null ],
      [ "f_op", "structvfs__file__t.html#ad437bf7dee999b7651f8800c3f126f0c", null ],
      [ "flags", "structvfs__file__t.html#aaebbee1f2c914ae9ac7423d104012b28", null ],
      [ "mp", "structvfs__file__t.html#a313adbcd336d5b19e7fa0c14632783cb", null ],
      [ "pid", "structvfs__file__t.html#a58686ba2e673bf443610b2d73761bbc8", null ],
      [ "pos", "structvfs__file__t.html#af8e66251bc47c18a66c52b55101f0dd7", null ],
      [ "private_data", "structvfs__file__t.html#ac0976352ba29e03d81b3af80d788c874", null ],
      [ "ptr", "structvfs__file__t.html#a0a2e8a328d7b72cd59cfae57b6ca649e", null ],
      [ "value", "structvfs__file__t.html#aa21c9be371467bff277d77d5328f6e86", null ]
    ] ],
    [ "vfs_DIR", "structvfs__DIR.html", [
      [ "buffer", "structvfs__DIR.html#a37eee3fa464ce6e11cd2e1f61c129a92", null ],
      [ "d_op", "structvfs__DIR.html#a1aac812aca784ac551e1eab75fc88e6e", null ],
      [ "mp", "structvfs__DIR.html#a66ca85b42a276f41f3a16ba207f52920", null ],
      [ "private_data", "structvfs__DIR.html#aa02d13277cbf8b6f4feda26b9b7c7f00", null ],
      [ "ptr", "structvfs__DIR.html#a93eec0c7d86fd616acc867fa5c36ac54", null ],
      [ "value", "structvfs__DIR.html#a25662fa045fe407bc8f8a2dd0fa248cd", null ]
    ] ],
    [ "vfs_dirent_t", "structvfs__dirent__t.html", [
      [ "d_ino", "structvfs__dirent__t.html#a26e72c3f39bb53d2064ea1ea5300ab4e", null ],
      [ "d_name", "structvfs__dirent__t.html#a6f0e2251c28e07cd1d29b33e643e6859", null ]
    ] ],
    [ "vfs_file_ops", "structvfs__file__ops.html", [
      [ "close", "structvfs__file__ops.html#a0bfc1733cc6123a44b5646ee5f40bf36", null ],
      [ "fcntl", "structvfs__file__ops.html#a05f92600f5de7b030a60ba727c7b0e6c", null ],
      [ "fstat", "structvfs__file__ops.html#a321c2d8e606f21ec64b3056d49dcba59", null ],
      [ "lseek", "structvfs__file__ops.html#a4dcd5c291b62718bcdcbca9aefa8f57b", null ],
      [ "open", "structvfs__file__ops.html#a52216a6ed298ae07b7b15c1b5edb6f03", null ],
      [ "read", "structvfs__file__ops.html#a97e827ff776e771423c643961bf5e5fe", null ],
      [ "write", "structvfs__file__ops.html#a9e4fab79a71451339efd10db396d2e48", null ]
    ] ],
    [ "vfs_dir_ops", "structvfs__dir__ops.html", [
      [ "closedir", "structvfs__dir__ops.html#a9e21a5e703e71151440e608ce504e94e", null ],
      [ "opendir", "structvfs__dir__ops.html#ab520000d6b339ee27b91f81848086ffe", null ],
      [ "readdir", "structvfs__dir__ops.html#a5cc8d2dfe100b02b41131b26b7c7f00b", null ]
    ] ],
    [ "vfs_file_system_ops", "structvfs__file__system__ops.html", [
      [ "format", "structvfs__file__system__ops.html#a95d83ef68d6d91cb97e7a27f13f3971d", null ],
      [ "fstatvfs", "structvfs__file__system__ops.html#a44fdce7afee87c37de42f17f62142604", null ],
      [ "mkdir", "structvfs__file__system__ops.html#a7b80a5323da189d936c0ab023f288f77", null ],
      [ "mount", "structvfs__file__system__ops.html#a095b91aad574104ec4702f65d4030931", null ],
      [ "rename", "structvfs__file__system__ops.html#a3ff34dc91c8e47da6f2e654b1cefc5be", null ],
      [ "rmdir", "structvfs__file__system__ops.html#aa2421e9d0fb854448cf8a481173390cf", null ],
      [ "stat", "structvfs__file__system__ops.html#a4c0e86e97e7f5d495e9cc2927cd39e5e", null ],
      [ "statvfs", "structvfs__file__system__ops.html#a07a609a8d3555aab9f9e01914f83490b", null ],
      [ "umount", "structvfs__file__system__ops.html#ae6ccfe3670dd9f6fb9b530f9db7c8bc8", null ],
      [ "unlink", "structvfs__file__system__ops.html#a3cd70847d9eb151c0cc9269b06a5202d", null ]
    ] ],
    [ "VFS_ANY_FD", "group__sys__vfs.html#ga2033ea53eb6551b0de53412ab38d0f41", null ],
    [ "VFS_DIR_BUFFER_SIZE", "group__sys__vfs.html#ga0e3cb874e1e5f6a49f33151d89f0aaef", null ],
    [ "VFS_FILE_BUFFER_SIZE", "group__sys__vfs.html#ga6d9a9dcf98b4d4e4372cc476b8fe8eba", null ],
    [ "VFS_MAX_OPEN_FILES", "group__sys__vfs.html#ga0dc4e529ed77b4432c7bd295bd89fefc", null ],
    [ "VFS_NAME_MAX", "group__sys__vfs.html#ga818372246f79e5e859a10eb24517a3df", null ],
    [ "vfs_dir_ops_t", "group__sys__vfs.html#gaefe122d8eea546f0786cbff3adcc4156", null ],
    [ "vfs_file_ops_t", "group__sys__vfs.html#gaae22046871c456cbbd1bca6298766b68", null ],
    [ "vfs_file_system_ops_t", "group__sys__vfs.html#ga1be46db273a8474303603f514fb7bfee", null ],
    [ "vfs_mount_t", "group__sys__vfs.html#ga9fc6f9bb8f8b2f401e2bd7181cc4018f", null ],
    [ "vfs_bind", "group__sys__vfs.html#ga88894417c3313eece41cf4cb3a283d42", null ],
    [ "vfs_bind_stdio", "group__sys__vfs.html#ga9b760e38efd5f348b77e582954f0b141", null ],
    [ "vfs_close", "group__sys__vfs.html#ga60d1dba40888b0dadfbb4f0a30e1cb89", null ],
    [ "vfs_closedir", "group__sys__vfs.html#gaf3ffccb04f73042f1b1bdb63ca770e73", null ],
    [ "vfs_fcntl", "group__sys__vfs.html#gacfac67f4d58f160ca165336b95e14c76", null ],
    [ "vfs_format", "group__sys__vfs.html#ga85c6c8cab631ccd9ad61badb54d8ba10", null ],
    [ "vfs_fstat", "group__sys__vfs.html#gad4649a984a7aa0643d157f8467d9c4ee", null ],
    [ "vfs_fstatvfs", "group__sys__vfs.html#gaf67facc4f466ae49d9eef46437a47581", null ],
    [ "vfs_iterate_mounts", "group__sys__vfs.html#gafdbefec3679da1fed038f1fc42e8e821", null ],
    [ "vfs_lseek", "group__sys__vfs.html#ga8280218c31e2cc294019433319c2d5aa", null ],
    [ "vfs_mkdir", "group__sys__vfs.html#ga4351778a74bb39fd68256847b6a22c8c", null ],
    [ "vfs_mount", "group__sys__vfs.html#ga188e99ea85dc9923550473e7e7b81500", null ],
    [ "vfs_normalize_path", "group__sys__vfs.html#ga1a43fdb3d5de4d23eef9f39dccf90cae", null ],
    [ "vfs_open", "group__sys__vfs.html#ga208458bdb4b5da7c1330e5fa160e7fee", null ],
    [ "vfs_opendir", "group__sys__vfs.html#gab28e72f381ff98931d9c2db584781162", null ],
    [ "vfs_read", "group__sys__vfs.html#gae56830870bc891bd8617d08bc621c5ea", null ],
    [ "vfs_readdir", "group__sys__vfs.html#ga81bb503b1aa7bb77d1d91170a0ea1b6d", null ],
    [ "vfs_rename", "group__sys__vfs.html#ga8d018700b625ff53592d50f4ef1c69a1", null ],
    [ "vfs_rmdir", "group__sys__vfs.html#gac9e6c31f4d15ed832cb5c61e0c6e9659", null ],
    [ "vfs_stat", "group__sys__vfs.html#ga9a4ef5ceb298c288b544cce1f7736aec", null ],
    [ "vfs_statvfs", "group__sys__vfs.html#ga2dd77a30a2ea9cc4531f40d089483b8e", null ],
    [ "vfs_umount", "group__sys__vfs.html#gab54e3dfaffd2aa3eb4eea3735b96baf0", null ],
    [ "vfs_unlink", "group__sys__vfs.html#gaadef8ee16be7695b8be4c151331df79c", null ],
    [ "vfs_write", "group__sys__vfs.html#ga3ab340fc28c34361e2b8206693e049d6", null ]
];