read -p "Comments : " comments
# yarn build
# cd ./build
# git init
git stage .
git add .
git commit -m "${comments} -autodeploy"
# git remote add origin https://github.com/ombahiwal/tabme-user-react-app
git push origin master
echo "Deployment Success! ${comments}"
