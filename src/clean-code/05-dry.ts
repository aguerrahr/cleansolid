type Size = ''| 'S'|'M'|'XL';

class Product{    
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size ='',        

    ){}

    toString(){
        //No Dry --> se esta duplicando el còdigo que son cada una de las validaciones
        //if (this.name.length<=0) throw Error('name is empty');
        //if (this.price<=0) throw Error('price is zero');
        //if (this.size.length<=0) throw Error('size is empty');
        for( const key in this){
            switch (typeof this[key]){
                case 'string':
                    if ( (<string><unknown>this[key]).length <= 0) throw Error(`${ key } is empty`)                    
                break;
                case 'number':
                    if ((<number><unknown>this[key]) <= 0) throw Error(`${ key } is zero`)                    
                break;
            }
        }
                
        return  `${ this.name} (${ this.price }), ${ this.size}`;       
    }
}

(()=>{
    const bluePants = new Product('Blue pants',52,'XL');
    console.log(bluePants.toString());
})();