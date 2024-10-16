# Install OpenGL with MingW on Windows10

## INSTALL MingW

1. Download `MingW` installer from [Sourceforge](https://sourceforge.net/projects/mingw/)
2. Install `MingW` to your prefer path and components needed
    * Mine is basic setup -> `mingw32-base` + `mingw32-gcc-g++` -> `GDB` and `Make` if needed

## INSTALL GLUT

1. Download zip file from [here](https://w3.cs.jmu.edu/bernstdh/web/common/help/glut-3.7.6-bin.zip)
2. Copy `glut.h` to `includes\`, `glut32.lib` to `lib\`, `glut32.dll` to both `Windows\System32` and `Windows\SysWOW64`
3. When compile, run command
    ```sh
    gcc your_program.c -lglut32 -lglu32 -lopengl32
    ```

## Refereces
[https://w3.cs.jmu.edu/bernstdh/web/common/help/cpp_mingw-glut-setup.php](https://w3.cs.jmu.edu/bernstdh/web/common/help/cpp_mingw-glut-setup.php)