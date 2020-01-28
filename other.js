                  
  Canvas.registerFont('./jooza.ttf', {family: 'Joza'})
client.on("message", message => {
    if (message.content == "الوان") {
        var fsn = require('fs-nextra');
        fs.readdir('./img/colors', async (err, files) => {
            var f = files[Math.floor(Math.random() * files.length)];
            var {
                Canvas
            } = require('canvas-constructor');
            var x = 0;
            var y = 0;
            message.guild.roles.filter(role => !isNaN(role.name)).sort((b1, b2) => b1.name - b2.name).forEach(() => {
                x += 100;
                if (x > 100 * 12) {
                    x = 100;
y += 80;
                }
            });
            var image = await fsn.readFile(`./img/colors/${f}`);
            var xd = new Canvas(100 * 11, y + 250)
                .addBeveledImage(image, 0, 0, 100 * 11, y + 250, 50)
                .setTextBaseline('middle')
                .setTextFont('30px Joza')
                .setColor('white')
                .setTextSize(60)
                .addText(`قـــائمة الالون سيرفر رولكس `, 325, 46);
            x = 0;
            y = 150;
            message.guild.roles.filter(role => !isNaN(role.name)).sort((b1, b2) => b1.name - b2.name).forEach(role => {
                x += 75;
                if (x > 100 * 10) {
                    x = 75;
                    y += 80;
                }
                xd
                    .setTextBaseline('middle')
                    .setTextFont('Joza')
                    .setTextAlign('center')
                    .setColor(role.hexColor)
                    .addBeveledRect(x, y, 60, 60, 15)
                    .setColor('white');
                if (`${role.name}`.length > 2) {
                    xd.setTextFont('Joza')
                    xd.setTextSize(25);
                } else if (`${role.name}`.length > 1) {
                    xd.setTextFont('Joza')
                    xd.setTextSize(35);
                } else {
                    xd.setTextFont('Joza')
                    xd.setTextSize(45);
                }
                xd.addText(role.name, x + 30, y + 30);
            });
            message.channel.sendFile(xd.toBuffer());
        });
    }
})

        
