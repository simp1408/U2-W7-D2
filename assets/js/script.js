let pagina_corrente=0;
let ol=document.querySelector('ol')

class Person{
    constructor(name,cognome){
        this.name=name;
        this.cognome=cognome
    }


}

let Parenti=[
    new Person("Simone","Ponzani"),
    new Person("Mario","Ponzani"),
    new Person("Luca","Ponzani"),
    new Person("Andrea","Ponzani"),
    new Person("Marco","Ponzani"),
    new Person("Vittoria","Ponzani"),
    new Person("Mattia","Ponzani"),
    new Person("Sara","Ponzani"),
    new Person("Flavio","Ponzani"),
];

class Pagina{
    constructor(items=[],pageSize=9)
    {
        // items sara l array di persone
        //pageSize= quante persone visualizziamo dentro la pagina
        this.items =items;
        this.pageSize=pageSize;
    }
    render(container,pagina=0){
        // per visualizzarli nn tutti insieme 
        container.innerHTML="";
        /*
        abbiamo 3 elementi

        pagina 0: 0-2,(3*0)=>(3*0+2)
        pagina 1: 3-5,(3*1)=>(3*0+2)
        pagina 2: 6-8,(3*2)=>(3*0+2)

        */
    //    let arrayTagliato=this.items.slice(0,3);
    //    let arrayTagliato=this.items.slice(0,3);

        let arrayTagliato=this.items.slice((this.pageSize * pagina),((this.pageSize * pagina)+ this.pageSize));
    //se siamo a pagina 0 noi visualizzeremo solo gli elementi da 0 a pageSize 


    // render ci mostra tutti gli elementi della pagina
    for(let parente of arrayTagliato)
     {
        let li=document.createElement('li')
        li.innerHTML=parente.name+" "+parente.cognome
        container.appendChild(li);
     }
   } 
    
}
// quando caricheremo la pagina partira il metodo avantiPagina
onload=()=>{
   avantiPagina()
}



 let avantiPagina=()=>{
    let pag=new Pagina(Parenti,3)
    pag.render(ol,pagina_corrente)
    pagina_corrente++
 }
 

 class Persone{

    constructor(name,age){
            this.name=name;
            this.age=age;
        }

    

    differenzaEta(confrontoEta){
        if(this.age>confrontoEta){
            console.log( this.age+" é piu  vecchio di "+ confrontoEta.age)
        }else{
            console.log( this.age+" é piu giovane di "+ confrontoEta.age)
        }
    }
       
    }
   
 
 
 let p1=new Persone("simone",36);
 let p2=new Persone("mattia",18);
 let p3=new Persone("maria",52);
 
 p1.differenzaEta(p2);