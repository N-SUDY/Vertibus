{ pkgs }: {
    deps = [
        pkgs.nodejs-14_x
        pkgs.libwebp
        pkgs.python
        pkgs.sudo
        pkgs.libuuid
        pkgs.wget
        pkgs.nodePackages.pm2
        pkgs.nodePackages.typescript
        pkgs.ffmpeg
        pkgs.imagemagick
        pkgs.git
    ];
  env ={
    LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [pkgs.libuuid];
  };
}