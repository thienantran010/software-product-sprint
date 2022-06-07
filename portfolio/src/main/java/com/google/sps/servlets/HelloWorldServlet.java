package com.google.sps.servlets;

import java.util.*;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {

    private ArrayList<String> quoteList = new ArrayList<String>();

    public void init() {
        /* initializes quoteList */
        quoteList.add("I hope you\'re hungry... for nothing!");
        quoteList.add("Something might happen here, and if it does, so what?");
        quoteList.add("Well, not to be too forward, but I would love to be included in your will.");
    }

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String json = convertToJson(quoteList);
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

  private String convertToJson(ArrayList<String> list) {
    Gson gson = new GsonBuilder().disableHtmlEscaping().create();
    String json = gson.toJson(list);
    return json;
  } 

}
