
#!/usr/bin/env bash
rsync --delete-before --verbose --archive /var/www/release/ /home/yanadoo/youcandoo.www/ > /var/log/deploy.log

chown yanadoo:yanadoo /home/yanadoo/youcandoo.www/

# timestamp
find /home/yanadoo/youcandoo.www/ -print0 | xargs -0 touch

if [ -d /var/www/release ]; then
    rm -rf /var/www/release
fi
