const apiRequest = async (url = "" , optionObj = null , errMsg = null ) =>{

     try {
         const res = await fetch(url , optionObj);
         console.log(res);
         if(!res.ok) throw Error ("Please Reload the app"); 
     } catch (error) {
         errMsg = error.message;
     } finally{
          return errMsg;
     }
}

export default apiRequest;