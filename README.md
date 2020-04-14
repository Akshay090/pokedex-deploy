# Deployment page for [Pokedex-DL](https://github.com/Akshay090/Pokedex-DL) 

## It classifies the awesome starters Pikachu, Charmander, Squirtle and bulbasaur.

You run this locally by installing Docker and using the following command:

```
docker build -t poke-image . && docker run --rm -it -p 5000:5000 poke-image
```

This is deployed on azure app service, with cd from master branch using azure pipelines

The poke-classify model is trained using custom image dataset hosted at: [pokemon-image-dataset](https://github.com/Akshay090/pokemon-image-dataset)

The dataset is generated using Bing image search api, you can get the code at: [image-dataset-bing-api](https://github.com/Akshay090/image-dataset-bing-api) to built your own image dataset.

The code to build your own model using the dataset is at : [Pokedex-DL](https://github.com/Akshay090/Pokedex-DL)

Blog post coming up soon to build this project on an Azure Datascience VM, deploy it on linux container azure app service,using azure container registry and  using azure pipelines for CI and CD.

This repo is based on [fastai deployment template](https://github.com/render-examples/fastai-v3)
