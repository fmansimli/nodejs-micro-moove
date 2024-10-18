#!/bin/bash

cd common && npm run local && cd ..

cd "$(pwd)/places" && npm run relink:common && cd ..
cd "$(pwd)/trips" && npm run relink:common && cd ..
cd "$(pwd)/logger" && npm run relink:common && cd ..
