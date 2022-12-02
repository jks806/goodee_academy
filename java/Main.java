package com.gyesu.kiosk.catcafe;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		System.out.println("=======================");
		System.out.println("=======[고양이카페]=======");
		System.out.println("=======================");
		// 자동 import.
		// ctrl+shift+o(영문자)

		Product p1 = new Product("아메리카노(ICE)/", 2000);
		Product p2 = new Product("아메리카노(HOT)/", 2000);
		Product p3 = new Product("콜라/", 1500);
		Product p4 = new Product("마카롱/", 1500);
		Product p5 = new Product("샌드위치/", 3000);
		Product p6 = new Product("라면/", 3000);
		Product p7 = new Product("김밥/", 2000);
		Product p8 = new Product("츄르/", 1000);
		Product p9 = new Product("참치캔/", 1000);

		Scanner sc = new Scanner(System.in);
		String cmd;
		loop_a: while (true) {
			System.out.print("[1.음료/2.디저트/3.식사/4.고양이간식] ");
			cmd = sc.next();
			switch (cmd) {
			case "1":
				System.out.println("=======================");
				System.out.println("=========[음료]=========");
				System.out.println("=======================");
				p1.info();
				p2.info();
				p3.info();
				loop_b: while (true) {
					System.out.print("[1.아메리카노(ICE)/2.아메리카노(HOT)/3.콜라/x.이전메뉴]");
					cmd = sc.next();
					switch (cmd) {
					case "1":
						System.out.println("아메리카노(ICE)가 1개 선택됐습니다.");
						break;
					case "2":
						System.out.println("아메리카노(HOT)가 1개 선택됐습니다.");
						break;
					case "3":
						System.out.println("콜라가 1개 선택됐습니다.");
						break;
					case "x":
						break loop_b;
					}
				}
				break;
			case "2":
				System.out.println("======================");
				System.out.println("========[디저트]========");
				System.out.println("======================");
				p4.info();
				p5.info();
				loop_c: while (true) {
					System.out.print("[1.마카롱/2.샌드위치/x.이전메뉴]");
					cmd = sc.next();
					switch (cmd) {
					case "1":
						System.out.println("마카롱이 1개 선택됐습니다.");
						break;
					case "2":
						System.out.println("샌드위치가 1개 선택됐습니다.");
						break;
					case "x":
						break loop_c;
					}
				}
				break;
			case "3":
				System.out.println("======================");
				System.out.println("========[식사]=========");
				System.out.println("======================");
				p6.info();
				p7.info();
				loop_d: while (true) {
					System.out.print("[1.라면/2.김밥/x.이전메뉴]");
					cmd = sc.next();
					switch (cmd) {
					case "1":
						System.out.println("라면이 1개 선택됐습니다.");
						break;
					case "2":
						System.out.println("김밥이 1개 선택됐습니다.");
						break;
					case "x":
						break loop_d;
					}
				}
				break;
			case "4":
				System.out.println("======================");
				System.out.println("=======[고양이간식]=======");
				System.out.println("======================");
				p8.info();
				p9.info();
				loop_e: while (true) {
					System.out.print("[1.츄르/2.참치캔/x.이전메뉴]");
					cmd = sc.next();
					switch (cmd) {
					case "1":
						System.out.println("츄르가 1개 선택됐습니다.");
						break;
					case "2":
						System.out.println("참치캔이 1개 선택됐습니다.");
						break;
					case "x":
						break loop_e;
					}
				}
				break;
			case "x":
				break loop_a;
			}
		}
		System.out.println("프로그램 종료");
		sc.close();
	}

}
