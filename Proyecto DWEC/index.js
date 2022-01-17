var lugar = ''

function loadDoc() {
    $.get("http://acnhapi.com/v1/villagers",imprimir)
    lugar='villagers'
  }

window.onload = ()=> {
	loadDoc()
	$('#Villagers').click(()=>{
		$.get("http://acnhapi.com/v1/villagers",imprimir)
		lugar='villagers'
	})

	$('#Fossils').click(()=>{
		$.get("http://acnhapi.com/v1/fossils",imprimir)
		lugar='fossils'
	})
	
	$('#Seacreatures').click(()=>{
		$.get("http://acnhapi.com/v1/sea",imprimir)
		lugar='seacreatures'
	})
}
function imprimir(json) {
	var main = $('#main');
	main.html('');
	json = Object.entries(json);
	json.forEach((charac)=>{
		let div = $('<div>');
		if (charac[1].image_uri != '') {
			let img = $('<img>').attr('src',charac[1].image_uri)
			img.attr('width', '75%')
			img.attr('height', '75%')
			div.append(img)
		}
		let p = $('<p>')
		console.log(p)
		let name = Object.entries(charac[1].name)[3]
		p.html(name[1])
		div.append(p)
		main.append(div);
		let open = $('<button>');
		open.addClass('open');
		open.html("More details");
		open.attr('id', 'open')
		open.click(()=>{
			$('#informacion h2').html(name[1])
			if (lugar=='villagers'){
				$('#informacion p').html('- Personality: '+charac[1].personality+'<br>'+'- Birthday: '+charac[1].birthday+
			'<br>'+'- Specie: '+charac[1].species+'<br>'+'- Gender: '+charac[1].gender)
			}else if(lugar=='fossils'){
				$('#informacion p').html('- Price: '+charac[1].price)
			}else{
				$('#informacion p').html('- Speed: '+charac[1].speed+'<br>'+'- Shadow: '+charac[1].shadow+'<br>'+'- Price: '+charac[1].price)
			}

			$('#informacion').show()
			$('#cerrar').click(()=>{
				$('#informacion').hide()
			})
		})
		div.append(open)
	})
}