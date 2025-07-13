---
title: Release {{ github.run_number }}
labels: release
---
Date: {{ date }}
Author: {{ github.actor }}
Version: {{ github.run_number }}
Commits: {{ github.event.commits }}
Docker image: `cr.yandex/crp6flpsq42sl65e0kb8/app:{{ github.run_number }}`