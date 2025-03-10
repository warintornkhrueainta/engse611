document.addEventListener('DOMContentLoaded', function() {
    // โค้ดสำหรับ tooltip ของรูปโปรไฟล์
    const profileImage = document.querySelector('.profile-image');
    const profileTooltip = document.querySelector('.profile-tooltip');
    
    profileImage.addEventListener('mouseover', function() {
        profileTooltip.style.display = 'block';
    });
    
    profileImage.addEventListener('mouseout', function() {
        profileTooltip.style.display = 'none';
    });

    // สร้าง modal สำหรับรูปโปรไฟล์
    profileImage.addEventListener('click', function() {
        createAndShowModal('<img src="https://i.pinimg.com/736x/79/56/a2/7956a235970913d5edcd44492b56b0a9.jpg" alt="Profile Large" style="max-width:100%;">');
    });

    // เพิ่มการทำงานให้กับปุ่ม Show me
    setupExerciseButtons();
});

// ฟังก์ชันสำหรับปุ่ม Show me แต่ละปุ่ม
function setupExerciseButtons() {

    document.getElementById('button1').addEventListener('click', function() {
        window.open('./10_Challenges/index1.html', '_blank');
    });

    document.getElementById('button2').addEventListener('click', function() {
        window.open('./10_Challenges/index2.html', '_blank');
    });

    document.getElementById('button3').addEventListener('click', function() {
        window.open('./10_Challenges/index3.html', '_blank');
    });

    document.getElementById('button4').addEventListener('click', function() {
        window.open('./10_Challenges/index4.html', '_blank');
    });

    document.getElementById('button5').addEventListener('click', function() {
        window.open('./10_Challenges/index5.html', '_blank');
    });

    document.getElementById('button6').addEventListener('click', function() {
        window.open('./10_Challenges/index6.html', '_blank');
    });

    document.getElementById('button7').addEventListener('click', function() {
        window.open('./10_Challenges/index7.html', '_blank');
    });

    document.getElementById('button8').addEventListener('click', function() {
        window.open('./10_Challenges/index8.html', '_blank');
    });

    document.getElementById('button9').addEventListener('click', function() {
        window.open('./10_Challenges/index9.html', '_blank');
    });

    document.getElementById('button10').addEventListener('click', function() {
        window.open('./10_Challenges/index10.html', '_blank');
    });
    
}


function createAndShowModal(content) {

    let modal = document.querySelector('.modal');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.className = 'modal';
        
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
        
        const closeButton = document.createElement('span');
        closeButton.className = 'close-button';
        closeButton.innerHTML = '&times;';
        closeButton.onclick = function() {
            modal.style.display = 'none';
        };
        
        modalContent.appendChild(closeButton);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
        
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
    
    const modalContent = modal.querySelector('.modal-content');
    modalContent.innerHTML = '<span class="close-button">&times;</span>' + content;
    
    modal.querySelector('.close-button').onclick = function() {
        modal.style.display = 'none';
    };
    
    modal.style.display = 'block';
}