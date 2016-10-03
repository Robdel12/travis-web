export CLEANED_BRANCH_SUBDOMAIN=`echo $TRAVIS_PULL_REQUEST_BRANCH | tr '.' '-'`

ember deploy org-production-pull-request --activate --verbose
TRAVIS_PRO=true ember deploy com-production-pull-request --activate --verbose

if [[ $TRAVIS_PULL_REQUEST_BRANCH = *staging* ]]
then
  API_ENDPOINT=https://api-staging.travis-ci.org ember deploy org-staging-pull-request --activate --verbose
  API_ENDPOINT=https://api-staging.travis-ci.com TRAVIS_PRO=true ember deploy com-staging-pull-request --activate --verbose
else
  echo "Skipping com- and org-staging PR deployments: no 'staging' in branch name."
fi

./config/deployment/update-github-status.sh
