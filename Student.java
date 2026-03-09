package com.cs.junghu;

public class Student {
	String name, department;
	int studentID;
	
	public Student(String a, int b, String c) {
		name = a;
		studentID = b;
		department = c;
	}
	
	public void displayDetails() {
		System.out.println("Name :" + this.name);
		System.out.println("Student ID :" + this.studentID);
		System.out.println("Department :" + this.department);
	}
}
