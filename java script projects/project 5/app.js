
  const spanBtn1 = document.getElementById('span-btn1');
  const res1 = document.querySelector('.res1');

  spanBtn1.addEventListener('click', function() {
    res1.classList.toggle('hidden');
    if (res1.classList.contains('hidden')) {
      spanBtn1.innerHTML = '<span>&#43;</span>';
    } else {
      spanBtn1.innerHTML = '<span>&#8722;</span>';
    }
  });


  const spanBtn2 = document.getElementById('span-btn2');
  const res2 = document.querySelector('.res2');

  spanBtn2.addEventListener('click', function() {
    res2.classList.toggle('hidden');
    if (res2.classList.contains('hidden')) {
      spanBtn2.innerHTML = '<span>&#43;</span>';
    } else {
      spanBtn2.innerHTML = '<span>&#8722;</span>';
    }
  });


  const spanBtn3 = document.getElementById('span-btn3');
  const res3 = document.querySelector('.res3');

  spanBtn3.addEventListener('click', function() {
    res3.classList.toggle('hidden');
    if (res1.classList.contains('hidden')) {
      spanBtn3.innerHTML = '<span>&#43;</span>';
    } else {
      spanBtn3.innerHTML = '<span>&#8722;</span>';
    }
  });



