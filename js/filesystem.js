function checkExistence(check){
    window.fetch(check).then((response) =>{
        if (response.ok) {
            window.location.href = check;    
        }
        else{
            const fs = new FileSystem('home',new FileSystemDirectoryEntry('.'));
            var model = new File('/html/model');
                        

        }
        
         });

    
}