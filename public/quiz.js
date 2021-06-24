$(function(){

    // jQuery methods go here...] ]
    console.log("started!")
    let but=$('#but')
    let btn1=$('#btn1')
    let main_content=$('#main_content')
    let tot= new Array(6);
        let r=0
        let i=0
      $('body').addClass('addimg1')
      $('#bg_image').hide()

    // Loop to create 2D array using 1D array
    //document.write("Creating 2D array <br>");
    for (r = 0; r <10; r++) {
        tot[r] = [];
    }
    let total_crct=0
     let flag=0

        function love1()
        {
          main_content.empty()
          
        }
        
        function love3()
        {
        $("li").click(function() {
         let  id = $(this).attr('id');
           let text=$("#"+id)
             console.log(i)
           console.log(tot[i][0])
         if(flag==0)
         {
             text.empty()
           if(id=="1")
           {
             if(tot[i][0]==tot[i][4])
             {
                    total_crct++
                    text.append(`
                    <span class="text-center py-2 px-3 font-weight-bolder text-dark">A</span><span class="text-monospace">${tot[i][0]}</span><span> <i class="fas fa-check-circle text-success"></i></span>
                    `)
             }
             else{
                 text.append(`
                 <span class="text-center py-2 px-3 font-weight-bolder text-dark">A</span><span class="text-monospace">${tot[i][0]}</span><span> <i class="fas fa-times-circle"></i></span>
                 `)
             }
           }
           else if(id=="2")
           {
             if(tot[i][1]==tot[i][4])
             {
                total_crct++   
                text.append(`
                <span class="text-center py-2 px-3 font-weight-bolder text-dark">B</span><span class="text-monospace">${tot[i][1]}</span><span> <i class="fas fa-check-circle text-success"></i></span>
                `) 
             }
             else
             {
                 text.append(`
                 <span class="text-center py-2 px-3 font-weight-bolder text-dark">B</span><span class="text-monospace">${tot[i][1]}</span><span> <i class="fas fa-times-circle"></i></span>
                 `)
             }
           }
           else if(id=="3")
           {
             if(tot[i][2]==tot[i][4])
             {
                total_crct++  
                text.append(`
                <span class="text-center py-2 px-3 font-weight-bolder text-dark">C</span><span class="text-monospace">${tot[i][2]}</span><span> <i class="fas fa-check-circle text-success"></i></span>
                `)  
             }
             else
             {
                 text.append(`
                 <span class="text-center py-2 px-3 font-weight-bolder text-dark">C</span><span class="text-monospace">${tot[i][2]}</span><span> <i class="fas fa-times-circle"></i></span>
                 `)
             }
           }
           else
           {
             if(tot[i][3]==tot[i][4])
             {
               total_crct++
               text.append(`
                <span class="text-center py-2 px-3 font-weight-bolder text-dark">D</span><span class="text-monospace">${tot[i][3]}</span><span> <i class="fas fa-check-circle text-success"></i></span>
                `) 
             }
             else
             {
                 text.append(`
                 <span class="text-center py-2 px-3 font-weight-bolder text-dark">D</span><span class="text-monospace">${tot[i][3]}</span><span> <i class="fas fa-times-circle"></i></span>
                 `)
             }
           }
           flag=1
           i++
         }
     })
 
   }


       function love()
       {
          love1()
          console.log(tot)
        console.log(tot[i][0])
        main_content.append(` <div class="col-3"></div>
        <div class="m-4 p-2 col-6" id="question">
         
            <ol class="list-group p-3 ml-4">
           <li class="list-group-item bg-danger text-white font-weight-bold">${(i+1)}. ${tot[i][5]}</li>    
            </ol>
           
           <ol>
             <li class="one my-4 list-group-item-primary text-danger m-2 py-2" id="1"><span class="text-center py-2 px-3 font-weight-bolder text-dark">A</span><span class="text-monospace">${tot[i][0]}</span></li>
             <li class="one my-4  list-group-item-primary text-danger m-2 py-2" id="2"><span class="text-center py-2 px-3 font-weight-bolder text-dark">B</span><span class="text-monospace">${tot[i][1]}</span></li>
             <li class="one my-4  list-group-item-primary text-danger m-2 py-2" id="3"><span class="text-center py-2  px-3 font-weight-bolder text-dark">C</span><span class="text-monospace">${tot[i][2]}</span></li>
             <li class="one my-4  list-group-item-primary text-danger m-2 py-2" id="4"><span class="text-center py-2 px-3 font-weight-bolder text-dark">D</span><span class="text-monospace">${tot[i][3]}</span></li>
           </ol>
       </div>
         <div class="col-3"></div>`)

         $('.one').hover(function(){
            $(this).addClass("bg-light");
            }, function(){
            $(this).removeClass("bg-light");
          })

            flag=0
           love3()
           console.log(i)
       }
       
    

      console.log(tot)

      btn1.click(()=>{

        $('#homepage').hide()
        
        $('body').removeClass('addimg1')
        $('body').addClass('addimg2')
          console.log("clicked!")
        fetch('https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple')
        .then((resp) => resp.json())
        .then(function(data) {
                //console.log(data)
               for(r=0;r<10;r++)
               {
                   //console.log(i)
                let Question=data.results[r].question
                let correct_answer=data.results[r].correct_answer
                let incorrect_answer=data.results[r].incorrect_answers
                let list=[]
                list.push(correct_answer)
                list.push(incorrect_answer[0])
                list.push(incorrect_answer[1])
                list.push(incorrect_answer[2])
                list = list.sort(() => Math.random() - 0.5)
                list.push(correct_answer)
                list.push(Question)
    
                  console.log(list)
                 for(let j=0;j<6;j++)
                   tot[r][j]=list[j]
               // console.log(list)
               }
                 flag=0    
                 console.log(tot)
                 love()
                 $('#bg_image').show()
                
          })
         .catch(function(error){
             console.log(error)
         });

      })
                
                flag=0               
                but.click(()=>{ 
                  
                    console.log(i)

                    if(i==10)
                    {
                      $('#final_submit').empty()
                      love1()
                      main_content.append(`<div class="col-4"></div>
                      <h1 class="col-6 shadow-sm p-4 text-center m-5 text-secondary text-uppercase bg-warning">score:${total_crct}/10</h1>
                      `)
                    }
                    else
                    {
                        love()
                    }

                })
  });