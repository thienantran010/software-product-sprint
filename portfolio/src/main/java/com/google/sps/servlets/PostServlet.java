package com.google.sps.servlets;

import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.FullEntity;
import com.google.cloud.datastore.KeyFactory;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.jsoup.Jsoup;
import org.jsoup.safety.Safelist;

@WebServlet("/post")
public class PostServlet extends HttpServlet {
    
    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

        String name = Jsoup.clean(request.getParameter("name"), Safelist.none());
        String message = Jsoup.clean(request.getParameter("wall-input"), Safelist.none());
        long timestamp = System.currentTimeMillis();

        Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
        KeyFactory keyFactory = datastore.newKeyFactory().setKind("Post");
        FullEntity postEntity = 
            Entity.newBuilder(keyFactory.newKey())
                .set("name", name)
                .set("timestamp", timestamp)
                .set("message", message)
                .build();

        datastore.put(postEntity);

        response.sendRedirect("/wall.html");
    }
}