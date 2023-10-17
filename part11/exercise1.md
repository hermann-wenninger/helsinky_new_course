#### linter's

**linter python:** pylint flake black
**linter javascript:** eslint jslint
*linter golang:* no linter required because its part of the language
**linter rust:** clippy
**linter for c:** oclint

visual studio code > linter: prettier

#### testframework's, liberys, packages, modules

**test python:** unittest pytest
**test javascript:** mochajs karma
**test golang:** testpackage
**test for rust:** The test module and function generated automatically by cargo new > with > #[cfg(test)]
**test for c:** cmocha

#### possibilitys to deploy code, projects

**deploy python:** heroku
**deploy javascript:** fly.io
**deploy golang:** fly.io
**deploy react:** vercel, firebase, netlify, surge, gitlab pages

#### Alternatives to github actions or jenkins:
travis ci, circle ci
cloud based:
AWS CodePipeline
Azure DevOps
Google Cloud Build
IBM Cloud Continuous Delivery

#### Considerations for decision-making: which type of CI environment is better

* a self-hosted CI environment can be more expensive than a cloud-based environment
* a cloud-based CI environment can scale more easily than a self-hosted environment
* a self-hosted CI environment can typically be considered more secure than a cloud-based environment
* a self-hosted CI environment requires more maintenance than a cloud-based

* To decide whether a self-hosted or cloud-based CI environment is better i must look for the specific needs and limitations.

+ How big is my team?
+ How big is the budget?
+ How important is control over my CI environment?
+ How important is my scalability of the CI environment?

#### at last

What knowledge do I have - what would I have to spend on further training for a possibly more suitable solution.

... end of dokument
