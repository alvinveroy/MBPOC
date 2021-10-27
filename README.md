# Manila Bulletin PoC for Google Trends

### Instalation
For windows:
  This script requires node-lts (version 16.11.1). I prefer chocolatey install because it is more convenient package manager. Open up a powershell running as Administrator to install chocolatey and paste the command from Chocolatey website.

[Chocolatey Software \| Installing Chocolatey](https://chocolatey.org/install)

Install node-lts
In your powershell running as Administrator type:
```
choco install nodejs --version=16.11.1
```
Then install git
```
choco install git
```

For MacOS:

Please refer to [Installing Node.js Tutorial: macOS - NodeSource](https://nodesource.com/blog/installing-nodejs-tutorial-mac-os-x/)

Git: [Install Git \| Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials/install-git)


### Cloning the repository

Open your command prompt then type

```
git clone https://github.com/alvinveroy/MBPOC.git
```
Then change the directory to MBPOC

```
cd MBPOC
```

### Running the script

Inside the MBPOC directory install the necessary dependencies by typing this command:
```
npm install
```

afterwards you can now run the script by typing:

```
npm start
```

The script spawns a headless chrome browser under a proxy and types in a search request (on this example, it searches for "rastaman 2022"). Theoretically, this script can increase the google trends of specific keywords used on the script's search request. However, this Proof of Concept relies on the amount of proxy and its availability. Anyone with a massive volume of high-quality proxies can potentially game google trends.