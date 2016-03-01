# nginx proxy pass example
> be less confusing

# Setup
1. Clone repo.
2. `vagrant up`
3. `vagrant ssh`
4. `cd /mnt/vagrant`
5. `node app`
6. Open your browser to http://10.10.10.10

## System Requirements

1. Ensure you have VirtualBox installed
  - https://www.virtualbox.org/ (All Platforms)
  - `brew install caskroom/cask/brew-cask && brew cask install virtualbox` via [homebrew](http://brew.sh/) (OSX)
2. Ensure you have Vagrant installed
  - http://www.vagrantup.com/ (All Platforms)
  - `brew install caskroom/cask/brew-cask && brew cask install vagrant` via [homebrew](http://brew.sh/) (OSX)
3. Ensure you have Ansible installed
  - `pip install ansible` via [pip](http://pip.readthedocs.org/en/latest/installing.html) (All Platforms)
  - `brew install ansible` via [homebrew](http://brew.sh/) (OSX)
  - `apt-get/yum install ansible` (Linux)
