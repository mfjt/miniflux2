document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.entry-item .item-meta').forEach(item => {
        const url = item.querySelector('.item-meta-icons-external-url a').href;
        item.querySelector('.item-meta-info')
            .appendChild(document.createElement('li'))
            .appendChild(Object.assign(document.createElement('a'), {
                href: 'http://b.hatena.ne.jp/entry/' + url,
                referrerpolicy: 'no-referrer',
                target: '_blank'
            }))
            .appendChild(Object.assign(document.createElement('img'), {
                loading: 'lazy',
                src: 'https://b.hatena.ne.jp/entry/image/' + url
            }));
    });

    const entryHeader = document.querySelector('.entry-header');
    if (entryHeader) {
        const url = entryHeader.querySelector('#page-header-title a').href;
        const share = entryHeader.querySelector('[data-share-status]');
        share.removeAttribute('data-share-status');
        share.addEventListener('click', function (event) {
            event.preventDefault();
            if (navigator.share) {
                navigator.share({
                    title: entryHeader.querySelector('#page-header-title a').textContent,
                    url: url
                })
                    .catch((err) => console.error(err));
            }
        });
        entryHeader.querySelector('.entry-meta')
            .appendChild(Object.assign(document.createElement('span'), {
                style: 'margin-left: 0.5em;'
            }))
            .appendChild(Object.assign(document.createElement('a'), {
                href: 'http://b.hatena.ne.jp/entry/' + url,
                referrerpolicy: 'no-referrer',
                target: '_blank'
            }))
            .appendChild(Object.assign(document.createElement('img'), {
                loading: 'lazy',
                src: 'https://b.hatena.ne.jp/entry/image/' + url
            }));
    }
});
