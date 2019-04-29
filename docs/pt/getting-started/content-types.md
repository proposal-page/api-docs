# Tipos de Conteúdo

## Empty (Vazio)
```json
{
    "style": {
        "backgroundImage": "",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover",
        "backgroundPosition": "center center",
        "opacity": 1,
    },
    "type": "empty"
}
```

## Text (Texto)
```json
{
    "style": {
        "backgroundImage": "",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover",
        "backgroundPosition": "center center",
        "opacity": 1,
    },
    "type": "text",
    "data": {
        "html": "<p style=\"text-align: center\">Lorem Ipsum</p>"
    }
}
```

## Image (Imagem)
```json
{
    "style": {
        "backgroundImage": "",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover",
        "backgroundPosition": "center center",
        "opacity": 1,
    },
    "type": "image",
    "data": {
       "url": "https://www.example.com/image.jpg",
       "width": "600px",
       "height": "500px"
    }
}
```

## Video
```json
{
    "style": {
        "backgroundImage": "",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover",
        "backgroundPosition": "center center",
        "opacity": 1,
    },
    "type": "video",
    "data": {
       "url": "https://www.youtube.com/watch?v=NGp0V0t3cPo",
       "provider": "youtube"
    }
}
```

## Quote
```json
{
    "style": {
        "backgroundImage": "",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover",
        "backgroundPosition": "center center",
        "opacity": 1,
    },
    "type": "quote",
    "data": {
       "options": {
            "currency": "USD"    
       },
       "content": {
       		"fields": [
       			{
       				"id": "name",
       				"label": "Name",
       				"show": true
       			},
       			{
       				"id": "quantity",
       				"label": "Quantity",
       				"show": true
       			},
       			{
       				"id": "price",
       				"label": "Price",
       				"show": true
       			}
       		],
       		"items": [
       			{ "id": "001", "name": "Product A", "quantity": 2, "price": 150.75 },
       			{ "id": "002", "name": "Product B", "quantity": 3, "price": 70.50 },
       			{ "id": "003", "name": "Product C", "quantity": 4, "price": 200.25 }
       		]
       	}
    }
}
```
