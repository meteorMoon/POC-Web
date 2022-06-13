import './style.css'

const taskForm= document.querySelector<HTMLFormElement>('#TaskForm')
const taskList= document.querySelector<HTMLDivElement>('#taskList')

interface Task{
  title:String
  description:String
}
let tasks: Task[]=[]

taskForm?.addEventListener('submit', e=>{
  e.preventDefault()

  const title = taskForm['title'] as unknown as HTMLInputElement
  const description = taskForm['descriptionle'] as unknown as HTMLInputElement
  
  tasks.push({
    title:title.value,
    description:description.value,
  })
  localStorage.setItem('tasks',JSON.stringify(tasks))
})

document.addEventListener('DOMContentLoaded', ()=>{
 tasks= JSON.parse(localStorage.getItem('tasks')||'[]')
 renderTask(tasks)
})
 function renderTask(tasks: Task[]){
   tasks.forEach(tasks =>{  
     const taskElement= document.createElement('div')

     const header= document.createElement('header')

     const title=document.createElement('span')
     title.innerText= ' '

     header.append(title)
     taskElement.append(header)

     taskList?.append(taskElement)
   })

 }
