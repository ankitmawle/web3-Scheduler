

window.addEventListener('hashchange',hashUpdate, false);
var headingDict={
  "mint":"Mint Your Own Tokeniz",
  "collection":"Find all connected tokeniz here",
}
function hashUpdate(){
  var newHash=window.location.hash;
  var children=document.querySelectorAll("#main   section");
  if(newHash==""){
    console.log("ab")
    return
  }
  else if(!headingDict[newHash.slice(1)]){
    
    console.log("abcc")
    return
  }

  console.log(children)
  for(i of children){
    i.classList.add("unpinned");
  }
  console.log(newHash)
  document.getElementById(newHash.slice(1)).classList.remove("unpinned");
  document.getElementById("heading").innerText=headingDict[newHash.slice(1)]
  
}

tinymce.init({
  selector: '#desc',
  plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
  menubar: 'file edit view insert format tools table help',
  toolbar: 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
  toolbar_sticky: true,
  autosave_ask_before_unload: true,
  autosave_interval: '30s',
  autosave_prefix: '{path}{query}-{id}-',
  autosave_restore_when_empty: false,
  autosave_retention: '2m',
  importcss_append: true,

  file_picker_callback: (callback, value, meta) => {
    /* Provide file and text for the link dialog */
    if (meta.filetype === 'file') {
      callback('https://www.google.com/logos/google.jpg', { text: 'My text' });
    }

    /* Provide image and alt text for the image dialog */
    if (meta.filetype === 'image') {
      callback('https://www.google.com/logos/google.jpg', { alt: 'My alt text' });
    }

    /* Provide alternative source and posted for the media dialog */
    if (meta.filetype === 'media') {
      callback('movie.mp4', { source2: 'alt.ogg', poster: 'https://www.google.com/logos/google.jpg' });
    }
  },
  templates: [
    { title: 'New Table', description: 'creates a new table', content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>' },
    { title: 'Starting my story', description: 'A cure for writers block', content: 'Once upon a time...' },
    { title: 'New list with dates', description: 'New List with dates', content: '<div class="mceTmpl"><span class="cdate">cdate</span><br><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>' }
  ],
  template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
  template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
  height: 600,
  max_width:800, 
  image_caption: true,
  quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
  noneditable_class: 'mceNonEditable',
  toolbar_mode: 'sliding',
  contextmenu: 'link image table',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});

function pinNav(){
  document.getElementById("particles-js").classList.add("t-nav-pinned");
  document.getElementsByClassName("bottom-buttons")[0].classList.add("hide");
}

function closeNav(){
  
  document.getElementsByClassName("bottom-buttons")[0].classList.remove("hide");
  document.getElementById("particles-js").classList.remove("t-nav-pinned");
}

function openEditor(){
  document.getElementById("editor").classList.remove("hide");
}

function closeEditor(){
  document.getElementById("editor").classList.add("hide");  
}

function doneEditor(){
  var myContent = tinymce.get("desc").getContent();
  document.getElementById("page").innerHTML=myContent;
  document.getElementById("page").classList.remove("hide");
  document.getElementById("add-button").innerHTML='<i class="fas fa-edit"> </i>Edit Message'
  document.getElementById("editor").classList.add("hide"); 
}
async function closeTokenEditor(){
	
  document.getElementById("tokenEditor").classList.add("hide");  
}
function openTokenEditor(){
  document.getElementById("tokenEditor").classList.remove("hide");
}



var loadFile = function(event) {
  var output = document.getElementById('preview');
  output.src = URL.createObjectURL(document.getElementById("fileInput").files[0]);
  output.style.display="block"
  console.log(output.src)
  output.onload = function() {
    URL.revokeObjectURL(output.src) // free memory
  }
}

function selectChain(){
  a=window.location;
  window.location.href=a.protocol+"//"+a.host.split(".")[1]+a.pathname+a.hash
}