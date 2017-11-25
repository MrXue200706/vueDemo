export default{
    set(key,value){
        localStorage.setItem(key,JSON.stringify(value));
    },
    get(key){
        let value=localStorage.getItem(key);
        try{
            value=JSON.parse(value);//undefind不能使用JSON.parse
        }finally{
            return value;
        }        
    },
    clear(){
        localStorage.clear();
    }
}