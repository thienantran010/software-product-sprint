package com.google.sps.servlets;

import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.Query;
import com.google.cloud.datastore.QueryResults;
import com.google.cloud.datastore.StructuredQuery.OrderBy;
import com.google.gson.Gson;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/show-post")
public class ShowPostServlet extends HttpServlet {

    public class Post {

        String name;
        String message;
        long timestamp;
        
        public Post(String name, String message, long timestamp) {
            this.name = name;
            this.message = message;
            this.timestamp = timestamp;
        }
    }

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException{
        Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
        Query<Entity> query = 
            Query.newEntityQueryBuilder().setKind("Post").setOrderBy(OrderBy.desc("timestamp")).build();
        QueryResults<Entity> results = datastore.run(query);

        List<Post> posts = new ArrayList<Post>();
        while (results.hasNext()) {
            Entity entity = results.next();
            String name = entity.getString("name");
            String message = entity.getString("message");
            long timestamp = entity.getLong("timestamp");

            Post post = new Post(name, message, timestamp);
            posts.add(post);
        }

        Gson gson = new Gson();

        response.setContentType("application/json;");
        response.getWriter().println(gson.toJson(posts));
    }
}