class Shapes {
    text;
    textColor

    constructor(text, textColor) {
        this.text = text;
        this.textColor = textColor;
    }

    setText() {
        return `<text x="50%" dominant-baseline="middle" text-anchor="middle" font-size="60px" font-weight="700"
        fill="${this.textColor}">${this.text}</text>`;
    }
}

class Circle extends Shapes {

    radius;

    constructor( text, textColor, radius) {
        super( text, textColor );
        this.radius =radius;
    }

    renderCircle() {
        return `<svg version="1.1"
        width="500" height="500"
        xmlns="http://www.w3.org/200/svg">
        <circle r="50" cx="50" cy="250" fill ="yellow"/>
        ${super.setText()}
        </svg>`
    }
}

class Triangle extends Shapes {

    radius;

    constructor(fill, textColor, text, radius) {
        super(fill, textColor, text);
        
    }

    renderTriangle() {
        return `<svg version="1.1"
        width="500" height="500"
        xmlns="http://www.w3.org/2000/svg">
        <triangle points="250,60" "100,400" "400,400" fill ="${this.fill}"/>
        ${super.setText()}
        </svg>`
    }
}

class Square extends Shapes {

    width;
    height;

    constructor(fill, textColor, text, width, height) {
        super(fill, textColor, text);
        this.width = width;
        this.height = height;
    }

    renderSquare() {
        const xEl = `${this.width}` / 2
        const yEl = `${this.height}` / 2
        return `<svg version="1.1"
        width="500" height="500"
        xmlns="http://www.w3.org/200/svg">
        <rect width="${this.width}" height="${this.height}" fill="${this.fill}"/>
        </svg>`
    }
}

module.exports = {Shapes, Circle, Triangle, Square }