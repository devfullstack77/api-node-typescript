use('noticias');

db.galerias.insert([
    {
        "_id": ObjectId("612d2bd71a18338c728c5ad9"),
        "titulo": "Aenean placerat. In vulputate urna eu arcu. Aliquam erat volutpa",
        "texto": "Suspendisse potenti. Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl",
        "imagem": "https://picsum.photos/200/300",
        "link": "https://picsum.photos/seed/picsum/200/300",
        "dataPublicacao": "2021-08-12T10:26:00.00",
        "tags": "Nam quis nulla. Integer malesuada. In in e",
        "ativo": true,
        "fotos": [
            {
                "thumb": "https://picsum.photos/100/100",
                "thumbNail": "https://picsum.photos/536/354",
                "credito": "malesuada",
                "legenda": "No especial de Natal, mais famosos entraram na cozinha do MasterChef"
            },
            {
                "thumb": "https://picsum.photos/100/100",
                "thumbNail": "https://picsum.photos/536/354",
                "credito": "Carlos Reinis/Band",
                "legenda": "Foi a vez de César Menotti e Maraísa mostrarem seus dotes culinários"
            },
            {
                "thumb": "https://picsum.photos/536/354",
                "thumbNail": "https://picsum.photos/536/354",
                "credito": "malesuada",
                "legenda": "Eles tiveram de enfrentar Péricles e Marília Mendonçano desafio"
            }
        ]
    }
]);
