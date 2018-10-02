https://arthurjen.github.io/booxy/

# Booxy

Booxy is a visual toy that starts as a single square. Each time the user clicks a square, it splits into 4 more squares.

![booxy screenshot](/public/screenshot.png)

## Built with

Booxy was built using Vue, where a single component can call itself four times everytime it's clicked. Using CSS Grid's default layout logic, each square populates a quarter of the parent square's space. Booxy also uses Vue's transition ability to add the "bounce" on spawn. 


