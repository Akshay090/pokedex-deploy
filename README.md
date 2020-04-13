# Deployment page for [Pokedex-DL](https://github.com/Akshay090/Pokedex-DL) 

## It classifies the awesome starters Pikachu, Charmander, Squirtle and bulbasaur.

You can test your changes locally by installing Docker and using the following command:

```
docker build -t poke-image . && docker run --rm -it -p 5000:5000 poke-image
```

This is deployed on azure app service, with cd from master branch using azure pipelines

This repo is based on [fastai deployment template](https://github.com/render-examples/fastai-v3)
