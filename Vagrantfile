# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"
NETWORK_IP = "10.10.10.10"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.synced_folder '.', '/mnt/vagrant'
  config.vm.network "private_network", ip: NETWORK_IP
   config.vm.provision "ansible" do |ansible|
     ansible.playbook = "ansible.yml"
   end
end
