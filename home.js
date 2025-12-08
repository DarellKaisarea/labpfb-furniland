document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.card').forEach(card=>{
    card.addEventListener('click', function(e){
      if(e.target.closest('a')) return;
      const link = this.querySelector('.detail-link');
      if(link) window.location = link.href;
    });
  });
});
