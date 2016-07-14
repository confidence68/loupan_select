## 案例介绍

这个案例是去年写的一个3D在线选房的插件，后期一直没有完善，后期结合ajax进行一些数据上的操作等。

这个案例鼠标移动到地图上面，可以出现一个3D的楼盘，鼠标移动到每个楼层上面，可以出现一些详细的信息

## 案例图片

![案例图片](https://raw.githubusercontent.com/confidence68/loupan_select/master/images/demo.jpg)

## 插件用法

插件是基于jquery的。

首先引入jquery

        <script src="js/jquery-1.11.1.min.js"></script>
        <script src="js/jquery-creat3Dloupan.js"></script>

如下调用：

            $(function () {
                $(".house_points").on("click", function () {
                    var lc = $(this).attr("data-Lc");

                    $(this).Creat3Dloupan({'Height': lc, 'topfloor': 'images/lcThems/topfloor.png', 'fontimgheight': 31, 'imgwidth': 169, 'imgheight': 46});
                })
            })