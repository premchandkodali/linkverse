package com.example;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/faculty")
public class FacultyServlet extends HttpServlet {

    private List<String> facultyList;

    @Override
    public void init() throws ServletException {
        facultyList = new ArrayList<>();
        facultyList.add("Dr. John Smith");
        facultyList.add("Prof. Jane Doe");
        facultyList.add("Dr. Emily Johnson");
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        out.print(facultyList);
        out.flush();
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Handle faculty data submissions here
    }
}