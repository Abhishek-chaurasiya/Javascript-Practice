1. Implement a function that converts a Javascript value into a JSON string.

const customStringify = (value)=>{
    if(value === null) return null;
    if(typeof value === undefined)return undefined;
    if(typeof value === 'string'){
        return `${value}`
    }
    if(typeof value === 'number' || typeof value === 'boolean'){
        return value.toString()
    }



    if(Array.isArray(value)){
        const arrayElements = value.map((val)=>{
            if(val === null)return 'null'
            return customStringify(val)
        })
        return `[${arrayElements.join(',')}]`
    }

    if(typeof value === 'object'){
        const keys = Object.keys(value);
        const objectElements = keys.map(key => {
            const keyValue = customStringify(value[key]);

            if(keyValue !== undefined){
                return `"${key}:" ${keyValue}`
            }
            return undefined
        }).filter(element => element !== undefined)
        return `{${objectElements.join(',')}}`;
    }
    return undefined;

    
}

const obj = {
    name: "John",
    age: 30,
    married: true,
    children: ["Ann", "Billy"],
    address: {
        street: "123 Main St",
        city: "New York"
    },
    getDetails: function() { return `${this.name} - ${this.age}`; } 
};

console.log(customStringify(obj))
