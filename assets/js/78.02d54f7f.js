(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{404:function(_,v,l){"use strict";l.r(v);var e=l(4),i=Object(e.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("![[Pasted image 20230302103103.png]]\n内核主要作用：")]),_._v(" "),v("ul",[v("li",[_._v("管理硬件资源：CPU、内存、I/O等等。")]),_._v(" "),v("li",[_._v("提供给 用户空间应用程序和库 一组可移植、与架构和硬件都无关的API 来使用 硬件资源。")]),_._v(" "),v("li",[_._v("处理来自不同应用程序对硬件资源的并发访问。\n"),v("ul",[v("li",[_._v("如只有一张网卡，内核通过多路复用、队列、消息机制来让不同应用程序使用网卡。")])])])]),_._v(" "),v("p",[_._v("系统调用（System calls）：")]),_._v(" "),v("ul",[v("li",[_._v("内核和用户空间之间的接口。")]),_._v(" "),v("li",[_._v("约400个，供用户空间应用程序使用。")]),_._v(" "),v("li",[_._v("封装在C语言库中，用户空间应用程序很少会直接调用系统调用，一般通过C库。")])]),_._v(" "),v("p",[_._v("伪文件系统/虚拟文件系统：")]),_._v(" "),v("ul",[v("li",[_._v("目的是为了让用户在用户空间也能看到系统和内核的信息。")]),_._v(" "),v("li",[_._v("其并不在存储设备中真实存在，而是由内核根据需要创建的。")]),_._v(" "),v("li",[_._v("最重要的两个：\n"),v("ul",[v("li",[_._v("proc：挂载在/proc，包含操作系统相关的信息如进程、内存管理参数等等。 ^023e18")]),_._v(" "),v("li",[_._v("sysfs：挂载在/sys，包含通过总线连接到系统的设备的信息。")])])])]),_._v(" "),v("p",[_._v("内部构成：![[Pasted image 20230302110113.png]]\n版本迭代：")]),_._v(" "),v("ul",[v("li",[_._v("Versions 2.6 (Dec. 2003) to 2.6.39 (May 2011)")]),_._v(" "),v("li",[_._v("Versions 3.0 (Jul. 2011) to 3.19 (Feb. 2015)")]),_._v(" "),v("li",[_._v("Versions 4.0 (Apr. 2015) to 4.20 (Dec. 2018)")]),_._v(" "),v("li",[_._v("Versions 5.0 (Mar. 2019) to 5.19 (July 2022)")]),_._v(" "),v("li",[_._v("Version 6.0 was released in Oct. 2022.")])]),_._v(" "),v("p",[_._v("内核源码：")]),_._v(" "),v("ul",[v("li",[_._v("途径：\n"),v("ul",[v("li",[v("a",{attrs:{href:"https://kernel.org/pub/linux/kernel",target:"_blank",rel:"noopener noreferrer"}},[_._v("官方源码"),v("OutboundLink")],1),_._v("。")]),_._v(" "),v("li",[_._v("非官方：芯片厂商提供的；内核社区提供的。")])])]),_._v(" "),v("li",[_._v("线上查看："),v("a",{attrs:{href:"https://elixir.bootlin.com/",target:"_blank",rel:"noopener noreferrer"}},[_._v("elixir"),v("OutboundLink")],1)]),_._v(" "),v("li",[_._v("大小：v5.18为例\n"),v("ul",[v("li",[_._v("75,878 files (git ls-files | wc -l)")]),_._v(" "),v("li",[_._v("33,242,942 lines (git ls-files | xargs cat | wc -l)")]),_._v(" "),v("li",[_._v("1,154,591,060 bytes (git ls-files | xargs cat | wc -c)")]),_._v(" "),v("li",[_._v("![[Pasted image 20230302112214.png]]")])])])]),_._v(" "),v("p",[_._v("![[Pasted image 20230302174709.png]]\n配置内核选项：使用Makefile文件，make命令")]),_._v(" "),v("ol",[v("li",[_._v("设置架构：ARCH，使用arch/目录下的文件夹名，如ARCH=arm or ARCH=arm64 or ARCH=riscv, etc")]),_._v(" "),v("li",[_._v("设置编译器：CROSS_COMPILE，如CROSS_COMPILE=arm-linux-gnueabi")]),_._v(" "),v("li",[_._v("选择模板配置："),v("code",[_._v("make <BOARDNAME_defconfig>")]),_._v("，使用"),v("code",[_._v("arch/<arch>/configs/")]),_._v("目录下的配置文件名。")]),_._v(" "),v("li",[_._v("根据需要进行修改：make menuconfig\n"),v("ul",[v("li",[_._v("保存后配置放在.config文件中，如需形成自己的配置文件：make savedefconfig，"),v("code",[_._v("mv defconfig arch/<arch>/configs/myown_defconfig")]),_._v("，别人要使用该配置则make myown_defconfig即可。")]),_._v(" "),v("li",[_._v("选项类型：\n"),v("ul",[v("li",[_._v("bool类型")]),_._v(" "),v("li",[_._v("tristate选项：true（把特性包含在内核镜像中）；module（把特性包含在内核模块中）、false")]),_._v(" "),v("li",[_._v("int类型")]),_._v(" "),v("li",[_._v("hex类型：十六进制值")]),_._v(" "),v("li",[_._v("string类型")])])]),_._v(" "),v("li",[_._v("依赖：\n"),v("ul",[v("li",[_._v("config\nB depends on A  # 配置B只有在A被配置时才可见")]),_._v(" "),v("li",[_._v("config A\nselect B   # 当A被启用时，B也会被启用，且无法取消。")])])])])])]),_._v(" "),v("ul",[v("li",[_._v("设备驱动、文件系统等特性可被编译成"),v("strong",[_._v("模块")]),_._v("。\n"),v("ul",[v("li",[_._v("每个模块是文件系统中的一个独立文件 → 因此要先有文件系统。")])])])]),_._v(" "),v("p",[_._v("编译内核源码：make -j 8")]),_._v(" "),v("ul",[v("li",[_._v("编译结果：\n"),v("ul",[v("li",[v("code",[_._v("arch/<arch>/boot/Image")]),_._v("：未压缩的内核镜像。")]),_._v(" "),v("li",[v("code",[_._v("arch/<arch>/boot/*Image*")]),_._v("：压缩的内核镜像，bzImage for x86, zImage for ARM, Image.gz for RISC-V, vmlinux.bin.gz for ARC, etc。")]),_._v(" "),v("li",[v("code",[_._v("arch/<arch>/boot/dts/*.dtb")]),_._v("：编译后的设备树blob。")]),_._v(" "),v("li",[_._v("内核模块.ko文件：分散在内核源码树。")]),_._v(" "),v("li",[_._v("vmlinux：ELF格式的未压缩的内核镜像，通常用于debug。\n安装内核：")])])]),_._v(" "),v("li",[_._v("为主机安装：sudo make install\n"),v("ul",[v("li",[v("code",[_._v("/boot/vmlinuz-<version>")]),_._v("：压缩的内核镜像")]),_._v(" "),v("li",[v("code",[_._v("/boot/System.map-<version>")]),_._v("：保存了内核符号（"),v("strong",[_._v("symbol")]),_._v("，函数、数据结构）地址，用于debug。")]),_._v(" "),v("li",[v("code",[_._v("/boot/config-<version>")]),_._v("：保存内核配置。")])])]),_._v(" "),v("li",[_._v("为嵌入式设备安装：\n"),v("ul",[v("li",[_._v("个人理解：不用make install安装，烧写即可。\n安装内核模块：")])])]),_._v(" "),v("li",[_._v("为主机安装：sudo make modules_install；安装在"),v("code",[_._v("/lib/modules/<version>/")]),_._v("目录下。\n"),v("ul",[v("li",[v("code",[_._v("kernel/")]),_._v("：包含.ko模块文件，与源码目录结构相同。")]),_._v(" "),v("li",[_._v("modules.alias, modules.alias.bin：别名，模块加载工具要用到。")]),_._v(" "),v("li",[_._v("modules.dep, modules.dep.bin：模块依赖。")]),_._v(" "),v("li",[_._v("modules.symbols, modules.symbols.bin：指明符号属于哪个模块，查找模块依赖要用到。")]),_._v(" "),v("li",[_._v("modules.builtin：内核内置的模块。")])])]),_._v(" "),v("li",[_._v("为嵌入式设备安装："),v("code",[_._v("make INSTALL_MOD_PATH=<dir>/ modules_install")]),_._v(" "),v("ul",[v("li",[_._v("为开发板生成模块相关的文件并把模块安装到开发板文件系统中。")])])])]),_._v(" "),v("p",[_._v("启动内核：")]),_._v(" "),v("ul",[v("li",[_._v("硬件描述：\n"),v("ul",[v("li",[_._v("许多嵌入式设备有大量的不可被发现（non-discoverable）的硬件（串口、以太网、I2C、NAND闪存、USB控制器等等）→ 需要描述这些硬件并把信息交给内核。")]),_._v(" "),v("li",[_._v("以前在内核中使用C代码描述；现在用ACPI表（x86平台上）或OpenFirmware Device Tree (DT)（嵌入式平台上），并在内核启动时交给内核。")]),_._v(" "),v("li",[_._v("内核开发者编写Device Tree Sources (DTS)，其编译后变成Device Tree Blobs (DTB)。")]),_._v(" "),v("li",[v("code",[_._v("arch/<arch>/boot/dts/<board>.dtb")]),_._v("：设备描述；pin多路复用；系统参数。")])])]),_._v(" "),v("li",[_._v("通过U-Boot启动：\n"),v("ul",[v("li",[_._v("ARM32：zImage镜像；ARM64 or RISC-V：Image镜像")]),_._v(" "),v("li",[_._v("流程：\n"),v("ul",[v("li",[_._v("加载zImage到内存的X地址。")]),_._v(" "),v("li",[_._v("加载"),v("code",[_._v("<board>.dtb")]),_._v("到内存的Y地址。")]),_._v(" "),v("li",[_._v("启动内核："),v("code",[_._v("bootz X - Y")]),_._v("（-表示没有initramfs）")])])])])]),_._v(" "),v("li",[v("strong",[_._v("内核命令行（kernel command line）")]),_._v("：定义给内核的参数，用于调整内核行为。\n"),v("ul",[v("li",[_._v("root=：设置根文件系统。")]),_._v(" "),v("li",[_._v("console=：设置内核日志信息输出到哪里。")]),_._v(" "),v("li",[_._v("例：console=ttyS0 root=/dev/mmcblk0p2 rootwait")]),_._v(" "),v("li",[v("a",{attrs:{href:"https://www.kernel.org/doc/html/latest/admin-guide/kernel-parameters.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("最重要的参数"),v("OutboundLink")],1)]),_._v(" "),v("li",[_._v("U-Boot把内核命令行设置在环境变量bootargs中，在启动内核前，U-Boot会把它设置到设备树的"),v("code",[_._v("chosen")]),_._v("区域。")]),_._v(" "),v("li",[_._v("内核根据CONFIG_CMDLINE_FROM_BOOTLOADER、CONFIG_CMDLINE_FORCE、CONFIG_CMDLINE_EXTEND设置的不同 而使用不同的命令行。")])])]),_._v(" "),v("li",[_._v("内核日志：\n"),v("ul",[v("li",[_._v("使用环形缓存存储。")]),_._v(" "),v("li",[v("code",[_._v("dmesg")]),_._v("命令查看日志。")])])])])])}),[],!1,null,null,null);v.default=i.exports}}]);