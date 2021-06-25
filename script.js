class ToDoList{
    

    addList(value)
    {
        let paragraph = document.createElement('p');
        paragraph.innerText = value;
        paragraph.classList.add('paragraph-styling'); //adds style to the paragraph
        list.appendChild(paragraph);
        textBox.value='';
        this.lineThrough(paragraph);
        this.delete(paragraph);
       
    }

    lineThrough(paragraph){
        paragraph.addEventListener('click',()=>{
            paragraph.style.textDecoration = "line-through";
        })
    }

    delete(paragraph)
    {
        paragraph.addEventListener('dblclick',()=>{
            list.removeChild(paragraph);
        })
    }
    
    


 
}

const toDoList =  new ToDoList ();
const textBox = document.getElementById("inputbox");
const list = document.querySelector('[list]');
const addButton = document.querySelector('[add]');

addButton.addEventListener('click',()=>{
    toDoList.addList(textBox.value);
})

