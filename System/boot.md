# Multiple-OS Boot troubleshoot
This file describes how to fix EFI and boot system especially useful in multiple systems

## Use GRUB to boot system:
   1. use `ls` to list partitions on disk.
   2. use ls (X, Y) to find which is the efi partition you need, 
      where X and Y should be changed according to your own situation.
   3. after found the right partition (X, Y), use `set root=(X, Y)`.
   4. use command `chainloader path/file.efi` to set the chainloader,
      for example, the path could be /efi/boot/grubx64.efi.
   5. use command `boot` to boot your system, done!

## If the installation of Linux destroys EFI of Windows:
   1. you need an external Windows installation disk, better on your USB.
   2. boot system from that disk, select your language, and press shift+f10 to open terminal.
   3. use `diskpart` to open diskpart.
   4. use `list vol` to list all volumns on your disk.
   5. find the right vol of your EFI, you can check if that's right by exit diskpart and cd into that volumn.
   6. if the volumn doesn't has a letter, you can use `select vol N` where N is the id of that volumn, and use `assign letter #` where # is the letter you want it to be, but not the existed letters.
   7. use `exit` to exit diskpart, `cd #:` to cd into a volumn, and use `dir` to list files to find which one is the EFI volumn and which one is the main partition of your Windows OS.
   8. use command `bcdboot #:\Windows /s $:` where # is your Windows OS volumn and $ is your EFI volumn.
   9. reboot and you can find your EFI has been fixed.

## If the installation of Windows destroys the EFI of Linux:
   1. you need an external Linux installation disk, better on your USB.
   2. follow the part "Use GRUB to boot system" to boot your Linux.
   3. after entered your Linux system, open your terminal and use `sudo update-grub` to let your Linux fix the boot loader automatically.
