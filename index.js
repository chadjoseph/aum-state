import listen from 'aum-listen';

var current;

listen('state', function (e) {
  var detail = e.detail;

  current = {
    controller: new detail.Controller(),
    view: detail.view
  };
});

export default function () {
  return current;
}

