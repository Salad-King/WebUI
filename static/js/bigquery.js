function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/bigquery https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/cloud-platform.read-only"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/bigquery/v2/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.bigquery.jobs.query({
      "projectId": "serene-circlet-189907",
      "resource": {
        "query": "select * from `Streaming.machine_1` order by ID desc limit 20;",
        "useLegacySql": false
      }
    })
    .then(function(response) {
        // Handle the results here (response.result has the parsed body).
        rows = response.result.rows
        var ids = [];
        var ir = [];
        var temp = [];
        var smoke = [];
        var predictions = []
        for(var i=0;i<rows.length;i++){
            ids.push(rows[i].f[0].v);
            smoke.push(rows[i].f[1].v);
            temp.push(rows[i].f[2].v);
            ir.push(rows[i].f[3].v);
            if(smoke < 0 || smoke >700 || temp < 0 || temp > 40 || ir < 0 || ir >1)
                predictions.push(0)
            else
                predictions.push(1)
        }
        update_chart(ids.reverse(), ir.reverse(), temp.reverse(), smoke.reverse(), predictions.reverse());
      },
      function(err) { console.error("Execute error", err); });
  }



  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "282251953548-iqjenaov29v66n670g9efai52glkcnki.apps.googleusercontent.com"});
  });