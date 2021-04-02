export default {
   taskUpdateAdapter(taskToAdapt) {
      for(const attr in taskToAdapt) {
         if(!taskToAdapt[attr]) delete taskToAdapt[attr];
      }
      return taskToAdapt;
   }
}