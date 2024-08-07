function cmmdd(event) {
    event.preventDefault(); 
    var first = document.getElementById('input1').value;
    var output = document.getElementsByClassName('cmdout')[0]; 
    document.getElementById('input1').value='';
    output.innerHTML+=`<div> - <i class="fa fa-dollar" style="font-size:20px;color:goldenrod;"> ${first}</i></div>`;
    if (first === 'help') {
        output.innerHTML += `
                <table >
                    <thead style="color:black; font-weight: 900;">
                        <tr>
                            <th>Command</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>bio</td>
                            <td>Show my bio information</td>
                        </tr>
                        <tr>
                            <td>skills</td>
                            <td>List out all my skills</td>
                        </tr>
                        <tr>
                            <td>projects</td>
                            <td>List out my projects</td>
                        </tr>
                        <tr>
                            <td>contact</td>
                            <td>Show my contact details</td>
                        </tr>
                        <tr>
                            <td>exit</td>
                            <td>Exit the terminal mode</td>
                        </tr>
                        <tr>
                            <td>clear</td>
                            <td>Clear the terminal</td>
                        </tr>
                    </tbody>
                </table>`;
    }
    else if(first==='clear'){
        document.getElementsByClassName('cmdout').value='';
        output.innerHTML='<h1></h1>'
    }
    else if(first==='exit'){
        setTimeout(()=>{output.innerHTML='<h1>Thanks For Coming.......</h1>'},2000)
        
        window.location.href="index.html";
    }
    else{
        output.innerHTML+=`
        <h2 style=color:red>Invalid Command</h2>
        <h3 style=color:white>Please try 'help' to see the command</h3>
        `
    }
}