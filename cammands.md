npx create-nx-workspace@latest library-hub \
 --preset=angular-monorepo \
 --appName=library-portal \
 --bundler=esbuild \
 --style=scss \
 --routing=true \
 --ssr=false \
 --unitTestRunner=vitest \
 --e2eTestRunner=playwright \
 --nxCloud=skip

cd library-hub

npx nx g @nx/angular:library --name=shared-ui --directory=libs/shared/ui --standalone --unitTestRunner=jest
npx nx g @nx/angular:library --name=shared-utils --directory=libs/shared/utils --standalone --unitTestRunner=vitest-analog
npx nx g @nx/angular:library --name=shared-auth --directory=libs/shared/auth --standalone --unitTestRunner=vitest-analog

npx nx g @nx/angular:library --name=books-feature-list --directory=libs/books/feature-list --standalone --unitTestRunner=vitest-analog
npx nx g @nx/angular:library --name=books-feature-detail --directory=libs/books/feature-detail --standalone --unitTestRunner=vitest-analog
npx nx g @nx/angular:library --name=books-data-access --directory=libs/books/data-access --standalone --unitTestRunner=vitest-analog
npx nx g @nx/angular:library --name=books-ui --directory=libs/books/ui --standalone --unitTestRunner=vitest-analog
