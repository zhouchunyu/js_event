$('.event').each(function(index, ele){
  ele.addEventListener('click', function(event){
    console.log(`捕获阶段,我是: ${event.currentTarget.id}`);
    alert(`捕获阶段,我是: ${event.currentTarget.id}`);
  }, true);
})

$('.event').each(function(index, ele){
  ele.addEventListener('click', function(event){
    console.log(`冒泡阶段,我是: ${event.currentTarget.id}`);
    alert(`冒泡阶段,我是: ${event.currentTarget.id}`);
  });
})