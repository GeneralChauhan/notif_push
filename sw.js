self.addEventListener('push', function(e){
  var  options ={
      body:'this is test meaasage',
      icon:'image/example.png',
      vibrate:[100,50,100],
      data:{
          dateOfArrival: Date.now(),
          primaryKey: '2'
      },
      actions: [
          {action: 'explore', title:'explore this world',
            icon:'image/example.png'},
          {action: 'close', title: 'close',
            icon:'image/example.png'},
      ]
  };
  e.waitUntil(
  self.ServiceWorkerRegistration.showNotification('hello world',options)
  );
});